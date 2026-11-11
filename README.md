# Frontend Foundations — prácticas HTML, CSS y JavaScript

Este repositorio está pensado para acompañar el estudio de los roadmaps de HTML, CSS y JavaScript de roadmap.sh con ejercicios reales, pequeños y progresivos.

La idea no es memorizar teoría. En cada práctica debes construir algo que funcione y poder explicar por qué has tomado determinadas decisiones.

## Cómo trabajar

1. Sigue las carpetas en orden: `01-html`, `02-css`, `03-javascript-logic`, `04-javascript-dom-http`, `05-typescript` y el capstone.
2. Lee el `README.md` de cada ejercicio antes de tocar código.
3. No uses frameworks ni librerías salvo que el ejercicio lo indique.
4. Evita copiar soluciones completas de Internet o IA: el objetivo es que puedas explicar tu implementación.
5. Cuando termines un ejercicio, revisa su checklist de aceptación.
6. Si algo no sabes hacerlo, investiga documentación y vuelve al ejercicio.
7. Sigue el [flujo de fork, ramas y Pull Requests](FLUJO-GIT.md): `main` se conserva limpio y las soluciones se integran en `solutions`.

## Qué se evalúa

No se evalúa solo que “se vea bien” o que “funcione”. También se tendrá en cuenta:

- uso correcto de HTML semántico;
- accesibilidad básica;
- CSS mantenible y responsive;
- comprensión del flujo de JavaScript;
- separación de responsabilidades;
- manejo de errores y estados vacíos;
- claridad de nombres;
- capacidad de explicar decisiones técnicas.

## Ejecutar los ejercicios

Los ejercicios de HTML y CSS pueden abrirse directamente en el navegador.

Para los ejercicios con `fetch`, arranca el servidor local incluido desde la raíz:

```bash
npm run dev
```

Después abre la URL que muestra la terminal, normalmente `http://localhost:4173`.

El servidor incluye live reload para macOS y Windows: al guardar un archivo del proyecto, el navegador se actualiza automáticamente. No necesitas instalar ninguna extensión.

Antes de ejecutar pruebas o TypeScript, instala las dependencias:

```bash
npm install
```

Consulta `npm test` y `npm run typecheck` en los ejercicios que los requieran.

Los ejercicios de lógica incluyen pruebas reales junto a su starter. Ejecútalas de forma individual, por ejemplo:

```bash
npm run test:exercise -- 03-javascript-logic/01-calcular-ticket
```

Una suite roja indica comportamiento pendiente: no se debe modificar el test para convertirla en verde.

## Orden sugerido

- HTML: estructura, semántica, formularios, tablas y accesibilidad.
- CSS: cascada, box model, flex, grid, responsive, estados y composición.
- JavaScript lógica: tipos, funciones, arrays, objetos, control de flujo y algoritmos cotidianos.
- JavaScript DOM/HTTP: eventos, DOM seguro, formularios, FormData, URL, storage, asincronía, fetch y estados de UI.
- TypeScript: datos externos, contratos, inmutabilidad, uniones discriminadas y clientes HTTP tipados.

## Regla importante

Cada ejercicio incluye criterios de aceptación, pero no una solución. Si puedes completarlo y justificarlo sin ayuda, el concepto está realmente aprendido.
