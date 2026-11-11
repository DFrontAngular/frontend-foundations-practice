import { readdir } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const exercise = process.argv[2];
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const directory = resolve(root, exercise ?? '');

if (!exercise || !directory.startsWith(`${root}${sep}`)) {
  console.error('Uso: npm run test:exercise -- <ruta-del-ejercicio>');
  process.exit(1);
}

const tests = (await readdir(directory))
  .filter((name) => name.endsWith('.test.mjs'))
  .map((name) => resolve(directory, name));
if (tests.length === 0) {
  console.error(
    `No hay pruebas automatizadas para ${exercise}. Revisa los criterios manuales del README.`,
  );
  process.exit(1);
}

const child = spawn(process.execPath, ['--test', ...tests], { stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 1));
