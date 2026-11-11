# Flujo de trabajo del alumnado

Este curso usa Git y Pull Requests como parte del aprendizaje. El objetivo es conservar el material original limpio y construir un historial de soluciones revisable.

```text
main                    material de partida: no se modifica
solutions               ejercicios terminados y revisados
exercise/04-formdata    trabajo de un ejercicio concreto
```

## Preparación inicial

1. Haz un **fork** de este repositorio en tu cuenta.
2. Clona tu fork y crea la rama acumulativa:

```bash
git switch -c solutions
git push -u origin solutions
```

3. Vuelve a `main` antes de empezar un ejercicio independiente:

```bash
git switch main
git pull origin main
git switch -c exercise/04-formdata
```

## Resolver y entregar un ejercicio

1. Trabaja únicamente en los archivos del ejercicio.
2. Ejecuta las comprobaciones relevantes: `npm test`, `npm run typecheck`, navegador, teclado y DevTools cuando aplique.
3. Haz commits pequeños que expliquen la intención.
4. Publica la rama y abre un Pull Request hacia **`solutions`**, nunca hacia `main`.

```bash
git add 04-javascript-dom-http/04-formdata
git commit -m "feat: resuelve ejercicio FormData"
git push -u origin exercise/04-formdata
```

Tras la revisión, fusiona el Pull Request en `solutions`. Puedes borrar la rama del ejercicio: el resultado queda preservado en el historial de `solutions`.

## Ejercicios acumulativos y capstone

El capstone y cualquier tarea que necesite soluciones anteriores deben partir de `solutions`, no de `main`:

```bash
git switch solutions
git pull origin solutions
git switch -c capstone/gestor-colecciones
```

Su Pull Request también termina en `solutions`.

## Reglas de sincronización

- `main` es una referencia limpia: **nunca** se hace merge de `solutions` hacia `main`.
- Si el curso publica cambios nuevos, actualiza primero tu `main` desde el repositorio original y después integra esos cambios en `solutions`.
- Cada Pull Request resuelve un solo ejercicio o una unidad coherente de trabajo.
- No hagas commits de `node_modules`, archivos de editor o secretos.

## Revisión

La revisión valida comportamiento, calidad, accesibilidad y explicación técnica. También puede incluir un cambio pequeño de requisito para comprobar que comprendes la solución y no solo alcanzaste el resultado.
