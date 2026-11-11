# 08 — Cargar usuarios con Fetch

Construye una lista de usuarios leyendo `./data/users.json` mediante `fetch`.

## Estados obligatorios

- loading;
- éxito con datos;
- éxito sin datos;
- error.

## Requisitos

- Mientras carga, informa al usuario.
- Comprueba `response.ok` antes de parsear JSON.
- Renderiza nombre, email y rol de cada usuario.
- No concatenes HTML procedente de datos externos con `innerHTML`.
- El botón “Reintentar” debe repetir la petición si hubo error.

## Prueba de error

Cambia temporalmente la URL a un fichero inexistente y verifica que la UI no se queda bloqueada en “Cargando…”.
