import assert from 'node:assert/strict';
import test from 'node:test';
import { paginate } from './exercise.js';

test('paginate calcula datos y metadatos de una página intermedia', () => {
  const result = paginate(
    Array.from({ length: 23 }, (_, index) => index + 1),
    2,
    10,
  );
  assert.deepEqual(result, {
    data: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    totalPages: 3,
    hasPrevious: true,
    hasNext: true,
  });
});
