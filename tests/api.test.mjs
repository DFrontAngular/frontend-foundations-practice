import assert from 'node:assert/strict';
import test from 'node:test';
import { createApp } from '../server.mjs';

async function withServer(run, options) {
  const server = createApp(options);
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  try {
    await run(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  }
}

test('development mode injects a live reload client', async () => {
  await withServer(
    async (baseUrl) => {
      const page = await fetch(`${baseUrl}/`).then((response) => response.text());
      assert.match(page, /EventSource\('\/__live-reload'\)/);
    },
    { liveReload: true },
  );
});

test('collections API filters, creates, updates and deletes', async () => {
  await withServer(async (baseUrl) => {
    const initial = await fetch(`${baseUrl}/api/collections?category=learning`).then((response) =>
      response.json(),
    );
    assert.equal(initial.items.length, 1);

    const created = await fetch(`${baseUrl}/api/collections`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ title: 'Notas de pruebas', category: 'work', favorite: true }),
    });
    assert.equal(created.status, 201);
    const item = await created.json();

    const updated = await fetch(`${baseUrl}/api/collections/${item.id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ title: 'Notas revisadas' }),
    });
    assert.equal((await updated.json()).title, 'Notas revisadas');

    const deleted = await fetch(`${baseUrl}/api/collections/${item.id}`, { method: 'DELETE' });
    assert.equal(deleted.status, 204);
  });
});

test('collections API reports validation and simulated errors', async () => {
  await withServer(async (baseUrl) => {
    const invalid = await fetch(`${baseUrl}/api/collections`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: '{}',
    });
    assert.equal(invalid.status, 400);
    const simulated = await fetch(`${baseUrl}/api/collections?status=500`);
    assert.equal(simulated.status, 500);
  });
});

test('resource routes render their Markdown as HTML', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/recursos/progreso/`);
    assert.equal(response.headers.get('content-type'), 'text/html; charset=utf-8');
    const page = await response.text();
    assert.match(page, /<h1>Hoja de progreso<\/h1>/);
    assert.match(page, /data-progress-id="progress-0"/);

    const guide = await fetch(`${baseUrl}/recursos/como-trabajar/`).then((result) => result.text());
    assert.match(guide, /href="\/recursos\/flujo-git\/"/);

    const workflow = await fetch(`${baseUrl}/recursos/flujo-git/`);
    assert.equal(workflow.headers.get('content-type'), 'text/html; charset=utf-8');
  });
});

test('exercise route renders a guide before serving its starter', async () => {
  await withServer(async (baseUrl) => {
    const guide = await fetch(`${baseUrl}/04-javascript-dom-http/04-formdata/`).then((result) =>
      result.text(),
    );
    assert.match(guide, /Ficha del ejercicio/);
    assert.match(guide, /Formulario con FormData/);
    assert.match(guide, /href="\/04-javascript-dom-http\/04-formdata\/\?starter=1"/);

    const starter = await fetch(`${baseUrl}/04-javascript-dom-http/04-formdata/?starter=1`).then(
      (result) => result.text(),
    );
    assert.match(starter, /<title>FormData<\/title>/);
  });
});

test('TypeScript exercises expose a guide and a starter page', async () => {
  await withServer(async (baseUrl) => {
    const guide = await fetch(`${baseUrl}/05-typescript/01-dominio-unknown/`);
    assert.equal(guide.status, 200);
    assert.match(await guide.text(), /Dominio y datos externos/);

    const starter = await fetch(`${baseUrl}/05-typescript/01-dominio-unknown/?starter=1`);
    assert.equal(starter.status, 200);
    assert.match(await starter.text(), /domain\.ts/);
  });
});
