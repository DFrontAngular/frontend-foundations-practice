# 04 — Formulario y estados de interacción

Estiliza este formulario prestando más atención a los estados que al aspecto visual.

## Debe distinguirse claramente

- estado normal;
- `:hover` cuando aplique;
- `:focus-visible`;
- `:disabled`;
- `:invalid` sin convertir toda la pantalla en rojo desde el primer render;
- texto de ayuda.

## Practica

- pseudo-clases;
- `:focus-visible`;
- `:user-invalid` si tu navegador objetivo lo soporta;
- selectores por atributo;
- consistencia de controles nativos.

## Criterios de aceptación

- La navegación por teclado es evidente.
- El estado disabled sigue siendo legible.
- Los errores no se comunican únicamente mediante color.
