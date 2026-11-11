# 01 — Calcular ticket de compra

Implementa `calculateCartTotal(items, taxRate)`.

Cada item tiene `{ name, price, quantity }`.

La función debe devolver un objeto con:

- `subtotal`;
- `tax`;
- `total`;
- `itemCount` (unidades totales, no líneas).

## Reglas

- No modifiques el array recibido.
- Si `items` está vacío, todos los importes son 0.
- `taxRate` se recibe como decimal: `0.21` significa 21%.
- Trabaja con números, no con strings formateados.

Desde la raíz, ejecuta únicamente las pruebas de este ejercicio:

```bash
npm run test:exercise -- 03-javascript-logic/01-calcular-ticket
```
