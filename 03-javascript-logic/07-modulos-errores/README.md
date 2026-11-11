# 07 — Módulos y errores de dominio

Implementa un catálogo de productos separando las reglas de negocio del código que presenta el resultado.

## Tarea

1. En `product-service.js`, implementa `findProductBySku` y `reserveProduct`.
2. Crea y utiliza un error de dominio cuando el SKU no exista o el stock sea insuficiente.
3. No modifiques el array recibido: devuelve un nuevo catálogo.
4. En `app.js`, muestra un mensaje comprensible sin ocultar errores inesperados.

## Criterios de aceptación

- [ ] Cada módulo tiene una responsabilidad concreta.
- [ ] Los errores de negocio incluyen un código y un mensaje útil.
- [ ] El error esperado se trata cerca de la interfaz; no se usa `catch` vacío.
- [ ] El catálogo original permanece intacto.

## Comprobación

Ejecuta solo este ejercicio:

```bash
npm run test:exercise -- 03-javascript-logic/07-modulos-errores
```

El ejercicio se completa modificando los archivos del directorio, no los tests.
