import assert from 'node:assert/strict';
import test from 'node:test';
import { DomainError } from './domain-error.js';
import { findProductBySku, reserveProduct } from './product-service.js';

test('findProductBySku devuelve el producto o un error de dominio', () => {
  const products = [{ sku: 'kb-1', stock: 2 }];
  assert.equal(findProductBySku(products, 'kb-1'), products[0]);
  assert.throws(
    () => findProductBySku(products, 'missing'),
    (error) => error instanceof DomainError && error.code === 'PRODUCT_NOT_FOUND',
  );
});

test('reserveProduct no muta y rechaza stock insuficiente', () => {
  const products = [{ sku: 'kb-1', stock: 2 }];
  assert.deepEqual(reserveProduct(products, 'kb-1', 1), [{ sku: 'kb-1', stock: 1 }]);
  assert.equal(products[0].stock, 2);
  assert.throws(
    () => reserveProduct(products, 'kb-1', 3),
    (error) => error instanceof DomainError && error.code === 'INSUFFICIENT_STOCK',
  );
});
