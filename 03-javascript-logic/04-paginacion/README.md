# 04 — Paginar resultados

Implementa `paginate(items, page, pageSize)`.

## Comprobación

```bash
npm run test:exercise -- 03-javascript-logic/04-paginacion
```

Debe devolver:

```js
{
  data: [],
  page: 1,
  pageSize: 10,
  totalItems: 42,
  totalPages: 5,
  hasPrevious: false,
  hasNext: true
}
```

## Reglas

- `page` empieza en 1.
- No modifiques el array original.
- Si se pide una página superior a las existentes, `data` debe ser `[]`.
- Decide y documenta qué haces si `page <= 0` o `pageSize <= 0`.

## Se evalúa

Cálculos, slicing, casos límite y diseño claro del contrato de una función.
