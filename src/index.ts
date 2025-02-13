export class NamedError<T extends string = ""> extends Error {
  public readonly name: T;

  constructor(name: T, messageOrError?: unknown) {
    super(messageOrError as string);
    this.name = name;
  }
}

/** Util in case you just want to return a single {@link NamedError} instance */
export function namedError<T extends string>(name: T, messageOrError?: unknown) {
  return new NamedError(name, messageOrError);
}

/**
 * Util function used to dispatch an instance of {@link NamedError} returned
 * from another function making use of the d-return module.
 *
 * @param namedErr Most likely returned via {@link drErr} | {@link namedError}
 * @returns - [0]Response => null
 *          - [1]Error => {@link NamedError}
 */
export function drDispatchErr<T extends string>(namedErr: NamedError<T>) {
  return [null, namedErr] as const;
}

/**
 * Returns an "error" Tuple
 *
 * @param name An arbitrary value for the name of the {@link NamedError}
 * @param messageOrError Arbitrary message or Error to add to the {@link NamedError}
 * @returns - [0]Response => null
 *          - [1]Error => {@link NamedError}
 */
export function drErr<T extends string>(name: T, messageOrError?: unknown) {
  const err = new NamedError(name, messageOrError);
  return [null, err] as const;
}

/**
 * Returns a "success" Tuple
 *
 * @param response Anything you want
 * @returns - [0]Response => response
 *          - [1]Error => null
 */
export function drRes<T = unknown>(response: T) {
  return [response, null] as const;
}
