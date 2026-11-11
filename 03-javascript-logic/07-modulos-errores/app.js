import { DomainError } from './domain-error.js';
import { reserveProduct } from './product-service.js';

const products = [{ sku: 'kb-1', name: 'Teclado', stock: 2 }];
const output = document.querySelector('[data-output]');

document.querySelector('button').addEventListener('click', () => {
  try {
    const nextProducts = reserveProduct(products, 'kb-1', 1);
    output.textContent = `Reserva correcta. Stock: ${nextProducts[0].stock}`;
  } catch (error) {
    if (error instanceof DomainError) output.textContent = error.message;
    else throw error;
  }
});
