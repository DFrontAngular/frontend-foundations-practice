# 01 — Dominio y datos externos

Modela una colección que llega desde una fuente no confiable.

- Define el dominio con `interface` o `type` según su propósito.
- Implementa guards para convertir `unknown` en un DTO comprobado.
- Normaliza campos opcionales y rechaza formas inválidas.
- No uses `any` ni afirmaciones de tipo para saltarte las comprobaciones.
