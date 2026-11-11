# 04 — Formulario con FormData

Construye el alta de una colección usando primero los controles nativos y después `FormData`.

## Tarea

1. Impide el envío real y crea `new FormData(form)` al enviar.
2. Normaliza el título con `trim()` y convierte el checkbox en booleano.
3. Respeta la validación nativa; muestra un resumen accesible solo después de un envío válido.
4. No leas valores con selectores individuales si ya están en el formulario.

## Criterios de aceptación

- [ ] Los controles tienen `label`, `name` y tipos correctos.
- [ ] Un título vacío no produce salida de éxito.
- [ ] El resultado no contiene HTML inyectado desde los campos.
- [ ] La función que transforma `FormData` devuelve un objeto de datos, no nodos DOM.

## Comprobación

```bash
npm run test:exercise -- 04-javascript-dom-http/04-formdata
```
