const categories = new Set(['all', 'learning', 'work', 'personal']);
const sorts = new Set(['recent', 'title']);

export function readUrlState(search) {
  // TODO: normaliza y devuelve { query, category, sort, page }.
  return { query: '', category: 'all', sort: 'recent', page: 1 };
}

export function toSearchParams(state) {
  // TODO: devuelve URLSearchParams sin parámetros por defecto ni vacíos.
  return new URLSearchParams();
}

export { categories, sorts };
