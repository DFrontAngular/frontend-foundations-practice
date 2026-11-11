# 10 — Mini app de tareas

Ejercicio final. Crea una pequeña aplicación de tareas persistente en `localStorage`.

## Funcionalidad mínima

- crear tarea;
- marcar/desmarcar como completada;
- eliminar;
- filtros: todas, pendientes, completadas;
- contador de pendientes;
- persistencia tras recargar la página.

## Modelo sugerido

```js
{
  id: crypto.randomUUID(),
  title: 'Preparar demo',
  completed: false
}
```

## Reglas

- Una tarea vacía no se crea.
- No almacenes HTML en `localStorage`, solo datos.
- El estado JavaScript debe ser la fuente de verdad; la UI se deriva de él.
- Los botones generados dinámicamente deben funcionar para cualquier tarea.
- Usa `JSON.stringify` y `JSON.parse` de manera controlada.

## Extra

- edición de tarea;
- botón “Eliminar completadas”;
- orden por fecha de creación.

## Se evalúa

Diseño de estado, funciones pequeñas, eventos, renderizado, persistencia y capacidad de extender el código sin romperlo.
