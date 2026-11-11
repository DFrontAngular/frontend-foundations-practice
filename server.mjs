import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import chokidar from 'chokidar';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = 4173;
const liveReloadScript = `<script>
  (() => {
    const connection = new EventSource('/__live-reload');
    connection.addEventListener('reload', () => window.location.reload());
  })();
</script>`;
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
};

function sendHtml(res, html, liveReload) {
  const page =
    liveReload && html.includes('</body>')
      ? html.replace('</body>', `${liveReloadScript}</body>`)
      : html;
  res.writeHead(200, { 'Content-Type': mime['.html'], 'Cache-Control': 'no-store' });
  res.end(page);
}

const resourcePages = new Map([
  ['/recursos/como-trabajar/', { file: 'README.md', title: 'Cómo trabajar' }],
  ['/recursos/progreso/', { file: 'PROGRESO.md', title: 'Progreso', progress: true }],
  ['/recursos/evaluacion/', { file: 'EVALUACION.md', title: 'Criterios de evaluación' }],
  ['/recursos/flujo-git/', { file: 'FLUJO-GIT.md', title: 'Flujo Git y Pull Requests' }],
]);

const markdownRoutes = new Map([['FLUJO-GIT.md', '/recursos/flujo-git/']]);

function escapeHtml(value) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character],
  );
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (_match, label, href) => {
      const target =
        markdownRoutes.get(href) ?? (/^(?:[a-z]+:|\/|#)/i.test(href) ? href : `/${href}`);
      return `<a href="${target}">${label}</a>`;
    });
}

function markdownToHtml(markdown, { progress = false } = {}) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let list = null;
  let inCode = false;
  let taskIndex = 0;
  const closeList = () => {
    if (list) {
      html.push(`</${list}>`);
      list = null;
    }
  };
  for (const line of lines) {
    if (line.startsWith('```')) {
      closeList();
      html.push(inCode ? '</code></pre>' : '<pre><code>');
      inCode = !inCode;
      continue;
    }
    if (inCode) {
      html.push(`${escapeHtml(line)}\n`);
      continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    const task = line.match(/^- \[ \]\s+(.+)$/);
    const unordered = line.match(/^-\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (heading) {
      closeList();
      html.push(`<h${heading[1].length}>${inlineMarkdown(heading[2])}</h${heading[1].length}>`);
      continue;
    }
    if (task) {
      if (list !== 'ul') {
        closeList();
        html.push('<ul class="markdown-list progress-markdown">');
        list = 'ul';
      }
      const id = `progress-${taskIndex++}`;
      const checkbox = progress
        ? `<input type="checkbox" data-progress-id="${id}">`
        : '<input type="checkbox" disabled>';
      html.push(`<li><label>${checkbox}<span>${inlineMarkdown(task[1])}</span></label></li>`);
      continue;
    }
    if (unordered || ordered) {
      const type = unordered ? 'ul' : 'ol';
      if (list !== type) {
        closeList();
        html.push(`<${type} class="markdown-list">`);
        list = type;
      }
      html.push(`<li>${inlineMarkdown((unordered ?? ordered)[1])}</li>`);
      continue;
    }
    if (!line.trim()) {
      closeList();
      continue;
    }
    closeList();
    html.push(`<p>${inlineMarkdown(line)}</p>`);
  }
  closeList();
  return html.join('\n');
}

async function resourcePage(page) {
  const markdown = await readFile(join(root, page.file), 'utf8');
  const script = page.progress
    ? '<script type="module" src="/assets/progress-page.js"></script>'
    : '';
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${page.title} · Frontend Foundations</title><link rel="stylesheet" href="/assets/site.css"></head><body><main class="site-shell resource-page"><div class="topbar"><a class="back-link" href="/">← Inicio</a><span class="eyebrow">Frontend Foundations</span></div><article class="markdown-content">${markdownToHtml(markdown, page)}</article></main>${script}</body></html>`;
}

async function exerciseGuide(pathname) {
  const relativePath = decodeURIComponent(pathname).replace(/^\/+/, '');
  const directory = normalize(join(root, relativePath));
  if (!directory.startsWith(root)) throw new Error('Invalid exercise path');
  const [readme, index] = await Promise.all([
    stat(join(directory, 'README.md')),
    stat(join(directory, 'index.html')),
  ]);
  if (!readme.isFile() || !index.isFile()) throw new Error('Not an exercise');
  const markdown = await readFile(join(directory, 'README.md'), 'utf8');
  const title = markdown.match(/^#\s+(.+)$/m)?.[1] ?? 'Ejercicio';
  const starterUrl = `${pathname}${pathname.endsWith('/') ? '' : '/'}?starter=1`;
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)} · Frontend Foundations</title><link rel="stylesheet" href="/assets/site.css"></head><body><main class="site-shell resource-page"><div class="topbar"><a class="back-link" href="javascript:history.back()">← Volver al bloque</a><span class="eyebrow">Ficha del ejercicio</span></div><article class="markdown-content exercise-guide">${markdownToHtml(markdown)}<p class="exercise-guide__actions"><a class="button-link" href="${starterUrl}">Abrir práctica</a></p></article></main></body></html>`;
}

const initialCollections = [
  {
    id: '1',
    title: 'Recursos de accesibilidad',
    category: 'learning',
    favorite: true,
    createdAt: '2026-01-10T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Ideas para el portfolio',
    category: 'work',
    favorite: false,
    createdAt: '2026-01-12T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'Libros pendientes',
    category: 'personal',
    favorite: false,
    createdAt: '2026-01-15T10:00:00.000Z',
  },
];

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  let body = '';
  for await (const chunk of req) body += chunk;
  return body ? JSON.parse(body) : {};
}

export function createApp({ liveReload = false } = {}) {
  let collections = initialCollections.map((item) => ({ ...item }));
  const reloadClients = new Set();

  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
      if (liveReload && url.pathname === '/__live-reload' && req.method === 'GET') {
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
        });
        res.write('retry: 1000\n\n');
        reloadClients.add(res);
        req.on('close', () => reloadClients.delete(res));
        return;
      }
      const resource = resourcePages.get(url.pathname);
      if (resource) {
        const page = await resourcePage(resource);
        return sendHtml(res, page, liveReload);
      }

      const isExercisePath =
        /^\/(?:0[1-5]-[^/]+)\/\d{2}-[^/]+\/$/.test(url.pathname) ||
        /^\/capstone\/[^/]+\/$/.test(url.pathname);
      if (isExercisePath && !url.searchParams.has('starter') && req.method === 'GET') {
        try {
          const guide = await exerciseGuide(url.pathname);
          return sendHtml(res, guide, liveReload);
        } catch {
          // It is a course section or a static asset rather than an exercise.
        }
      }
      const delay = Number(url.searchParams.get('delay'));
      if (Number.isFinite(delay) && delay > 0)
        await new Promise((resolve) => setTimeout(resolve, Math.min(delay, 3000)));
      if (url.searchParams.get('status') === '500')
        return json(res, 500, { error: 'Error simulado del servidor.' });

      if (url.pathname === '/api/collections') {
        if (req.method === 'GET') {
          const query = (url.searchParams.get('query') ?? '').trim().toLocaleLowerCase('es');
          const category = url.searchParams.get('category') ?? 'all';
          const sort = url.searchParams.get('sort') ?? 'recent';
          const page = Math.max(1, Number(url.searchParams.get('page')) || 1);
          const limit = Math.min(20, Math.max(1, Number(url.searchParams.get('limit')) || 6));
          let items = collections.filter(
            (item) =>
              (!query || item.title.toLocaleLowerCase('es').includes(query)) &&
              (category === 'all' || item.category === category),
          );
          items = items.toSorted((a, b) =>
            sort === 'title'
              ? a.title.localeCompare(b.title, 'es')
              : b.createdAt.localeCompare(a.createdAt),
          );
          const total = items.length;
          return json(res, 200, {
            items: items.slice((page - 1) * limit, page * limit),
            total,
            page,
            limit,
          });
        }
        if (req.method === 'POST') {
          const input = await readJson(req);
          const title = typeof input.title === 'string' ? input.title.trim() : '';
          const category = typeof input.category === 'string' ? input.category : '';
          if (!title || !['learning', 'work', 'personal'].includes(category))
            return json(res, 400, { error: 'Título y categoría válida son obligatorios.' });
          const item = {
            id: crypto.randomUUID(),
            title,
            category,
            favorite: Boolean(input.favorite),
            createdAt: new Date().toISOString(),
          };
          collections = [item, ...collections];
          return json(res, 201, item);
        }
      }

      const itemMatch = url.pathname.match(/^\/api\/collections\/([^/]+)$/);
      if (itemMatch) {
        const index = collections.findIndex((item) => item.id === itemMatch[1]);
        if (index === -1) return json(res, 404, { error: 'Colección no encontrada.' });
        if (req.method === 'PATCH') {
          const input = await readJson(req);
          const title =
            typeof input.title === 'string' ? input.title.trim() : collections[index].title;
          if (!title) return json(res, 400, { error: 'El título es obligatorio.' });
          collections[index] = {
            ...collections[index],
            title,
            favorite:
              typeof input.favorite === 'boolean' ? input.favorite : collections[index].favorite,
          };
          return json(res, 200, collections[index]);
        }
        if (req.method === 'DELETE') {
          collections = collections.filter((item) => item.id !== itemMatch[1]);
          res.writeHead(204);
          return res.end();
        }
      }

      let rel = decodeURIComponent(url.pathname).replace(/^\/+/, '');
      let file = normalize(join(root, rel));
      if (!file.startsWith(root)) throw new Error('Invalid path');
      const info = await stat(file);
      if (info.isDirectory()) file = join(file, 'index.html');
      const extension = extname(file);
      const data = await readFile(file);
      if (extension === '.html') return sendHtml(res, data.toString('utf8'), liveReload);
      res.writeHead(200, { 'Content-Type': mime[extension] ?? 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 - Not found');
    }
  });

  server.reloadClients = () => {
    for (const client of reloadClients) client.write('event: reload\ndata: changed\n\n');
  };
  return server;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = createApp({ liveReload: true });
  const watcher = chokidar.watch(root, {
    ignoreInitial: true,
    ignored: /(^|[\\/])(?:\.git|node_modules)([\\/]|$)/,
  });
  let reloadTimer;
  watcher.on('all', () => {
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(() => server.reloadClients(), 100);
  });
  server.on('close', () => watcher.close());
  server.listen(port, () => console.log(`Servidor con live reload: http://localhost:${port}`));
}
