export const categories = [
  { id: 'learning', label: 'Aprendizaje' },
  { id: 'work', label: 'Trabajo' },
  { id: 'personal', label: 'Personal' },
] as const satisfies readonly { id: string; label: string }[];

export type CategoryId = (typeof categories)[number]['id'];
export type Collection = Readonly<{ id: string; title: string; category: CategoryId }>;

export function renameCollection(collection: Collection, title: string): Collection {
  // TODO: devuelve una nueva colección y conserva el tipo readonly.
  return collection;
}

export function categoryLabel(category: CategoryId): string {
  // TODO: encuentra la etiqueta sin forzar un tipo inseguro.
  return category;
}
