let comments = [
  { id: 'a', author: 'Ana', text: 'Buen recurso', favorite: false },
  { id: 'b', author: 'Luis', text: 'Revisar despues', favorite: false },
];
const list = document.querySelector('[data-comments]');

function render() {
  // TODO: limpia y crea li, texto y boton con createElement/textContent.
}

list.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-id]');
  if (!button) return;
  // TODO: actualiza comments de forma inmutable y vuelve a renderizar.
});
render();
