import assert from 'node:assert/strict';
import test from 'node:test';
import { normalizeUsers } from './exercise.js';

test('normalizeUsers normaliza y descarta emails vacíos sin mutar', () => {
  const input = [
    { firstName: '  ana ', lastName: 'GARCIA', email: ' ANA@MAIL.COM ' },
    { firstName: 'LUIS', lastName: ' pérez ', email: '   ' },
  ];
  assert.deepEqual(normalizeUsers(input), [{ fullName: 'Ana Garcia', email: 'ana@mail.com' }]);
  assert.equal(input[0].firstName, '  ana ');
});
