export class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

export async function getJson<T>(url: string, parse: (value: unknown) => T): Promise<T> {
  // TODO: comprueba response.ok, lee JSON y ejecuta parse.
  void url;
  void parse;
  throw new Error('Not implemented');
}
