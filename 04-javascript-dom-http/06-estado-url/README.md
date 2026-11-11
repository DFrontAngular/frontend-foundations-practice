# 06 — Estado en la URL

Sincroniza un catálogo con sus filtros sin depender de estado oculto.

## Tarea

1. Lee `query`, `category`, `sort` y `page` con `URLSearchParams`.
2. Al cambiar un filtro, actualiza la URL con History API y vuelve a página 1.
3. Rehidrata los controles y la vista al cargar y con `popstate`.
4. Trata valores desconocidos con valores seguros por defecto.

## Criterios de aceptación

- [ ] Copiar la URL conserva la vista.
- [ ] Atrás y adelante actualizan controles y resultados.
- [ ] No hay URLs con parámetros vacíos ni páginas menores que 1.
- [ ] El estado se deriva de la URL antes de renderizar.

Ejecuta solo este ejercicio para comprobar los helpers puros:

```bash
npm run test:exercise -- 04-javascript-dom-http/06-estado-url
```
