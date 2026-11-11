# 03 — Estados de interfaz

Representa una carga de colecciones con una unión discriminada. Debe ser imposible representar a la vez `loading` y datos de éxito.

- Implementa un render exhaustivo con `never`.
- Diferencia colección vacía, éxito con datos y error.
- No uses varios booleanos independientes para describir el estado.
