# 03 — Agrupar pedidos por estado

Implementa `groupOrdersByStatus(orders)`.

## Comprobación

```bash
npm run test:exercise -- 03-javascript-logic/03-agrupar-pedidos
```

Entrada:

```js
[
  { id: 1, status: 'pending', total: 20 },
  { id: 2, status: 'paid', total: 50 },
];
```

Salida esperada conceptualmente:

```js
{
  pending: { count: 1, total: 20 },
  paid: { count: 1, total: 50 }
}
```

Los estados posibles no están prefijados: la función debe soportar cualquiera.

## Se evalúa

- acumuladores;
- objetos dinámicos;
- bucles o `reduce` bien entendidos;
- ausencia de casos hardcodeados.
