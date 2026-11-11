import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateCartTotal } from './exercise.js';

test('calculateCartTotal calcula importes y no muta los items', () => {
  const items = [
    { name: 'Teclado', price: 50, quantity: 2 },
    { name: 'Ratón', price: 25, quantity: 1 },
  ];
  assert.deepEqual(calculateCartTotal(items, 0.21), {
    subtotal: 125,
    tax: 26.25,
    total: 151.25,
    itemCount: 3,
  });
  assert.deepEqual(items, [
    { name: 'Teclado', price: 50, quantity: 2 },
    { name: 'Ratón', price: 25, quantity: 1 },
  ]);
});

test('calculateCartTotal admite un carrito vacío', () =>
  assert.deepEqual(calculateCartTotal([], 0.21), { subtotal: 0, tax: 0, total: 0, itemCount: 0 }));
