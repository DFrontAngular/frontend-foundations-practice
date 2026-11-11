import assert from 'node:assert/strict';
import test from 'node:test';
import { buildSalesRanking } from './exercise.js';

test('buildSalesRanking agrega, ordena y respeta el límite', () => {
  const sales = [
    { seller: 'Ana', amount: 100 },
    { seller: 'Luis', amount: 200 },
    { seller: 'Ana', amount: 150 },
    { seller: 'Marta', amount: 200 },
    { seller: 'Luis', amount: 100 },
  ];
  assert.deepEqual(buildSalesRanking(sales, 2), [
    { seller: 'Luis', total: 300 },
    { seller: 'Ana', total: 250 },
  ]);
});
