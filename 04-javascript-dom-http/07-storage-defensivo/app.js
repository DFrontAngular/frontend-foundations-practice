const KEY = 'frontend-foundations-density';
export function readDensity(storage = localStorage) {
  // TODO: devuelve comfortable o compact; recupera comfortable ante JSON invalido.
  void storage;
  return 'comfortable';
}

const select = document.querySelector('[data-density]');
const output = document.querySelector('[data-output]');
function render() {
  const density = readDensity();
  select.value = density;
  output.textContent = `Densidad actual: ${density}`;
}
select.addEventListener('change', () => {
  // TODO: persiste el valor como JSON y renderiza.
});
render();
