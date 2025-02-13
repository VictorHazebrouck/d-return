/**
 * Simple Wrapper around the Error class allowing us to give it a name that will
 * later be treated as some kind of a union.
 */
export declare class NamedError<T extends string = ""> extends Error {
    readonly name: T;
    constructor(name: T, messageOrError?: unknown);
}
/** Util in case you just want to return a single {@link NamedError} instance. */
export declare function namedError<T extends string>(name: T, messageOrError?: unknown): NamedError<T>;
/**
 * Util function used to dispatch an instance of {@link NamedError} returned
 * from another function making use of the d-return module.
 *
 * @param namedErr Most likely returned via {@link drErr} | {@link namedError}
 * @returns - [0]Response => null
 *          - [1]Error => {@link NamedError}
 */
export declare function drDispatchErr<T extends string>(namedErr: NamedError<T>): readonly [null, NamedError<T>];
/**
 * Returns an "error" Tuple.
 *
 * @param name An arbitrary value for the name of the {@link NamedError}
 * @param messageOrError Arbitrary message or Error to add to the {@link NamedError}
 * @returns - [0]Response => null
 *          - [1]Error => {@link NamedError}
 */
export declare function drErr<T extends string>(name: T, messageOrError?: unknown): readonly [null, NamedError<T>];
/**
 * Returns a "success" Tuple.
 *
 * @param response Anything you want
 * @returns - [0]Response => response
 *          - [1]Error => null
 */
export declare function drRes<T = unknown>(response: T): readonly [T, null];
