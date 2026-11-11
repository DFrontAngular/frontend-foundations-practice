# 09 — Buscador HTTP con debounce y cancelación

Construye un buscador de productos. Los datos están en `./data/products.json`, pero debes realizar un `fetch` cada vez que se lance una búsqueda real para practicar asincronía.

## Comportamiento

- No busques hasta que haya al menos 2 caracteres.
- Espera 300 ms desde la última pulsación antes de lanzar la búsqueda (`debounce`).
- Si empieza una nueva búsqueda antes de terminar la anterior, cancela la anterior con `AbortController`.
- Filtra por nombre y categoría tras recibir los datos.
- Diferencia visualmente: sin término, cargando, resultados, sin resultados y error.

## Se evalúa

Temporizadores, closures, promesas, `async/await`, `AbortController` y evitar race conditions.
