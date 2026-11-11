import assert from 'node:assert/strict';
import test from 'node:test';
import { groupOrdersByStatus } from './exercise.js';

test('groupOrdersByStatus agrupa cantidad y total por estado', () => {
  assert.deepEqual(
    groupOrdersByStatus([
      { id: 1, status: 'pending', total: 20 },
      { id: 2, status: 'paid', total: 50 },
      { id: 3, status: 'pending', total: 30 },
    ]),
    { pending: { count: 2, total: 50 }, paid: { count: 1, total: 50 } },
  );
});
