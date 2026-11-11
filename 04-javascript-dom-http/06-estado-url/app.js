import { readUrlState, toSearchParams } from './url-state.js';

const form = document.querySelector('form');
function render() {
  const state = readUrlState(window.location.search);
  // TODO: sincroniza los controles y renderiza el estado de forma segura.
  document.querySelector('[data-output]').textContent = JSON.stringify(state);
}
form.addEventListener('change', () => {
  // TODO: construye el siguiente estado, usa history.pushState y renderiza.
  void toSearchParams;
});
window.addEventListener('popstate', render);
render();
