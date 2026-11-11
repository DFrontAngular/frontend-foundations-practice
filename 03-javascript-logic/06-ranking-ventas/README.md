# 06 — Ranking de ventas

Implementa `buildSalesRanking(sales, limit = 3)`.

## Comprobación

```bash
npm run test:exercise -- 03-javascript-logic/06-ranking-ventas
```

Cada venta tiene:

```js
{ seller: 'Ana', amount: 150 }
```

Una persona puede aparecer muchas veces.

Devuelve las `limit` personas con mayor importe acumulado:

```js
[
  { seller: 'Ana', total: 450 },
  { seller: 'Luis', total: 320 },
];
```

## Reglas

- Agrupa primero todas las ventas de cada persona.
- Ordena de mayor a menor.
- Devuelve un nuevo array.
- Si dos vendedores empatan, desempata alfabéticamente.

Este ejercicio combina transformación, acumulación y ordenación.
