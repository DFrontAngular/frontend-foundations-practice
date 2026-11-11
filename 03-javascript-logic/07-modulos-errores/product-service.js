import { DomainError } from './domain-error.js';

export function findProductBySku(products, sku) {
  // TODO: devuelve el producto o lanza DomainError('PRODUCT_NOT_FOUND', ...).
}

export function reserveProduct(products, sku, quantity) {
  // TODO: valida quantity, comprueba stock y devuelve un catálogo nuevo.
  // Lanza DomainError('INSUFFICIENT_STOCK', ...) cuando corresponda.
}
