# 04 — Tabla de facturas

Representa una relación de facturas en HTML.

## Columnas sugeridas

- número;
- cliente;
- fecha;
- estado;
- base imponible;
- impuestos;
- total.

Incluye al menos 6 filas y un resumen final con el total facturado.

## Requisitos

- Usa una tabla real, no Grid/Flex ni una colección de `div`.
- Incluye `caption`.
- Distingue correctamente encabezado, cuerpo y pie.
- Usa celdas de cabecera con `scope` cuando sea apropiado.
- Los importes deben mostrar una estructura coherente.

## Criterios de aceptación

- Un lector puede entender qué significa cada dato sin depender de CSS.
- Hay un resumen total en `tfoot`.
- La cabecera está correctamente identificada.
