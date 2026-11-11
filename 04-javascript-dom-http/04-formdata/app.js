export function collectionFromFormData(formData) {
  // TODO: devuelve { title, category, favorite } con título normalizado.
}

if (typeof document !== 'undefined') {
  const form = document.querySelector('form');
  const output = document.querySelector('[data-output]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const collection = collectionFromFormData(new FormData(form));
    // TODO: muestra un resumen seguro usando textContent o nodos.
    output.textContent = '';
    void collection;
  });
}
