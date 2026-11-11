import assert from 'node:assert/strict';
import test from 'node:test';
import { readUrlState, toSearchParams } from './url-state.js';

test('readUrlState normaliza valores inválidos', () => {
  assert.deepEqual(readUrlState('?query=%20hola%20&category=other&sort=no&page=-2'), {
    query: 'hola',
    category: 'all',
    sort: 'recent',
    page: 1,
  });
});

test('toSearchParams omite defaults y conserva filtros válidos', () => {
  assert.equal(
    toSearchParams({ query: 'hola', category: 'work', sort: 'title', page: 2 }).toString(),
    'query=hola&category=work&sort=title&page=2',
  );
  assert.equal(
    toSearchParams({ query: '', category: 'all', sort: 'recent', page: 1 }).toString(),
    '',
  );
});
