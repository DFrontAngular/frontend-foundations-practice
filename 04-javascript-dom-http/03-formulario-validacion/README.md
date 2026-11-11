# 03 — Validación progresiva de formulario

Implementa validación JavaScript sobre el formulario entregado, complementando —no sustituyendo— las restricciones HTML.

## Reglas

- Nombre: mínimo 2 caracteres tras `trim()`.
- Email: usa la validez nativa del input.
- Password: mínimo 8 caracteres y debe contener al menos un número.
- Términos: obligatorio.

## UX esperada

- No muestres todos los errores nada más cargar.
- Al enviar, enfoca el primer campo inválido.
- Cada error debe estar asociado al control de forma accesible.
- Si todo es válido, muestra un mensaje de éxito y evita un envío real.

## Se evalúa

`submit`, `input`/`blur`, constraint validation API, atributos ARIA solo cuando aporten valor y actualización segura del DOM.
