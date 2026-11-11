# 07 — Preferencias persistentes

Guarda la densidad visual de un panel en `localStorage` sin confiar ciegamente en lo almacenado.

- Lee JSON con control de errores.
- Acepta solo valores permitidos (`comfortable` o `compact`).
- Usa una preferencia por defecto ante datos corruptos o antiguos.
- Actualiza la interfaz cuando la persona cambia de opcion.
