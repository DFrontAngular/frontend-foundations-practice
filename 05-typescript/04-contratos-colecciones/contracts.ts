export type Category = 'learning' | 'work' | 'personal';
export interface Collection {
  id: string;
  title: string;
  category: Category;
  favorite: boolean;
}
export type CreateCollection = Omit<Collection, 'id'>;
export type UpdateCollection = Partial<Pick<Collection, 'title' | 'category' | 'favorite'>>;

export function indexById<T extends { id: string }>(items: readonly T[]): Record<string, T> {
  // TODO: devuelve un índice sin mutar items.
  return {};
}

export function applyUpdate(collection: Collection, update: UpdateCollection): Collection {
  // TODO: combina el cambio sin aceptar modificaciones del id.
  return collection;
}
