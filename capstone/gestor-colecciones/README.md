# Capstone — Gestor de colecciones

Construye una aplicación sin framework para gestionar colecciones personales. No copies una solución: organiza el código para poder explicar cómo viajan los datos desde el usuario hasta la interfaz.

## Arranque

Desde la raíz ejecuta `npm run dev` y abre `/capstone/gestor-colecciones/`.

## Requisitos funcionales

- Carga datos desde `GET /api/collections` y representa exactamente uno de estos estados: carga, error, vacío o éxito.
- Busca, filtra por categoría, ordena y pagina; el estado vive en la URL (`query`, `category`, `sort`, `page`).
- Crea colecciones con un formulario y `FormData`, usando `POST /api/collections`.
- Permite editar título/favorito (`PATCH`) y eliminar con confirmación (`DELETE`).
- Guarda una preferencia visual o de filtrado no compartible en `localStorage` de forma defensiva.
- Usa elementos semánticos, foco visible, mensajes `aria-live` y controles operables con teclado.
- No insertes datos remotos con `innerHTML`; crea nodos o usa `textContent`.

## API de práctica

- `GET /api/collections?query=&category=&sort=&page=&limit=`
- `POST /api/collections` con JSON `{ title, category, favorite }`
- `PATCH /api/collections/:id` con `{ title?, favorite? }`
- `DELETE /api/collections/:id`

Añade `status=500` o `delay=1200` a un GET para comprobar errores y carga. La API vive en memoria: al reiniciar el servidor recupera sus datos iniciales.

## Entrega y defensa

Incluye en tu entrega: qué implementaste, decisiones principales, cómo lo comprobaste, ayuda externa usada y la parte más difícil. Durante la revisión deberás modificar un requisito pequeño y explicar el flujo completo de una interacción.
