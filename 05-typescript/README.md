# TypeScript práctico

Este bloque no busca convertir tipos en burocracia. Cada ejercicio parte de una frontera real: datos externos, estado de interfaz, contratos de actualización o HTTP.

Ejecuta `npm run typecheck` desde la raíz. No uses `any`, type assertions indiscriminadas ni desactives `strict` para hacer pasar el ejercicio.

## Decisiones del bloque

- Usa `interface` para contratos extensibles de objetos y `type` para uniones, composiciones y alias.
- Prefiere uniones literales con `as const` antes que `enum`; un `enum` genera JavaScript y no siempre aporta valor.
- `satisfies` valida una forma sin perder la inferencia de la constante.
- `readonly` expresa una intención de inmutabilidad; no congela el valor en runtime.
- `#campo` es privacidad real de JavaScript en runtime. `private` de TypeScript solo se comprueba durante el typecheck.
