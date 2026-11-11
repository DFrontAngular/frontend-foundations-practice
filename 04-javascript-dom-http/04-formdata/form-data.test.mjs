import assert from 'node:assert/strict';
import test from 'node:test';
import { collectionFromFormData } from './app.js';

test('collectionFromFormData normaliza el título y checkbox', () => {
  const data = new FormData();
  data.set('title', '  Recursos web  ');
  data.set('category', 'learning');
  data.set('favorite', 'on');
  assert.deepEqual(collectionFromFormData(data), {
    title: 'Recursos web',
    category: 'learning',
    favorite: true,
  });
});
