# 03 — Formulario de alta

Crea un formulario de registro de usuario utilizando capacidades nativas de HTML.

## Campos

- nombre completo;
- email;
- contraseña;
- fecha de nacimiento;
- país (`select`);
- preferencia de contacto (`radio`);
- aceptación de términos (`checkbox`);
- comentarios opcionales (`textarea`).

## Requisitos

- Cada control debe tener un `label` asociado correctamente.
- Usa tipos de `input` adecuados.
- Usa validaciones HTML nativas donde tengan sentido: `required`, `minlength`, `maxlength`, `min`, `max`, `pattern`, etc.
- Agrupa campos relacionados con `fieldset` y `legend` cuando corresponda.
- Añade texto de ayuda cuando un requisito no sea evidente.

## Criterios de aceptación

- El formulario puede recorrerse con teclado.
- Los labels funcionan al hacer clic.
- El navegador puede impedir el envío de valores claramente inválidos sin JavaScript.
- No uses placeholder como sustituto del label.
