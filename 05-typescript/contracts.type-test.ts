import {
  parseCollection,
  type Collection as ExternalCollection,
} from './01-dominio-unknown/domain.js';
import {
  categories,
  categoryLabel,
  renameCollection,
  type CategoryId,
} from './02-datos-inmutables/catalog.js';
import { stateMessage, type ViewState } from './03-estados-interfaz/state.js';
import { applyUpdate, indexById, type Collection } from './04-contratos-colecciones/contracts.js';
import { getJson } from './05-cliente-http/client.js';

const category: CategoryId = categories[0].id;
categoryLabel(category);
renameCollection({ id: '1', title: 'Antes', category }, 'Después');

const state: ViewState = { status: 'success', items: [{ id: '1', title: 'Colección' }] };
stateMessage(state);

const collection: Collection = { id: '1', title: 'Notas', category: 'work', favorite: false };
const indexed = indexById<Collection>([collection]);
applyUpdate(collection, { title: 'Notas actualizadas' });

const remote: unknown = { id: '1', title: 'Notas', category: 'learning' };
const parsed: ExternalCollection = parseCollection(remote);
const request: Promise<ExternalCollection> = getJson('/api/collections/1', parseCollection);
void parsed;
void request;

// @ts-expect-error Una categoría ajena al catálogo no es válida.
categoryLabel('other');
// @ts-expect-error El contrato de actualización no puede cambiar el id.
applyUpdate(collection, { id: '2' });
