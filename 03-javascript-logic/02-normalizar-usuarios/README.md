# 02 — Normalizar usuarios

Implementa `normalizeUsers(users)`.

## Comprobación

```bash
npm run test:exercise -- 03-javascript-logic/02-normalizar-usuarios
```

Recibirás objetos como:

```js
{ firstName: '  ana ', lastName: 'GARCIA', email: ' ANA@MAIL.COM ' }
```

Devuelve un nuevo array con:

```js
{ fullName: 'Ana Garcia', email: 'ana@mail.com' }
```

## Reglas

- Elimina espacios sobrantes.
- Email siempre en minúsculas.
- Nombre y apellido deben empezar por mayúscula y continuar en minúscula.
- No modifiques los objetos originales.
- Filtra entradas cuyo email esté vacío después de limpiar espacios.

## Se evalúa

Uso razonable de funciones de string, `map`, `filter` y composición de transformaciones.
