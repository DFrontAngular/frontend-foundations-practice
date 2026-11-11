export type Collection = { id: string; title: string };
export type ViewState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; items: readonly Collection[] }
  | { status: 'empty' }
  | { status: 'error'; message: string };

function assertNever(value: never): never {
  throw new Error(`Estado no manejado: ${JSON.stringify(value)}`);
}

export function stateMessage(state: ViewState): string {
  // TODO: usa switch y assertNever para tratar cada estado.
  return assertNever(state as never);
}
