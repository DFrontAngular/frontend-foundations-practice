export interface Collection {
  id: string;
  title: string;
  category: 'learning' | 'work' | 'personal';
  note?: string;
}

export function isCollection(value: unknown): value is Collection {
  // TODO: comprueba la forma mínima sin usar any.
  return false;
}

export function parseCollection(value: unknown): Collection {
  // TODO: devuelve Collection o lanza Error con un mensaje útil.
  throw new Error('Not implemented');
}
