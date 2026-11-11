import assert from 'node:assert/strict';
import test from 'node:test';
import { canReserve } from './exercise.js';

test('canReserve valida disponibilidad, duplicados y límite', () => {
  assert.equal(canReserve(['A1', 'A2'], ['B1'], 4).ok, true);
  assert.equal(canReserve([], [], 4).ok, false);
  assert.equal(canReserve(['A1', 'A1'], [], 4).ok, false);
  assert.equal(canReserve(['A1'], ['A1'], 4).ok, false);
  assert.equal(canReserve(['A1', 'A2', 'A3'], [], 2).ok, false);
});
