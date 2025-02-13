"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedError = void 0;
exports.namedError = namedError;
exports.drDispatchErr = drDispatchErr;
exports.drErr = drErr;
exports.drRes = drRes;
class NamedError extends Error {
    constructor(name, messageOrError) {
        super(messageOrError);
        this.name = name;
    }
}
exports.NamedError = NamedError;
/** Util in case you just want to return a single {@link NamedError} instance */
function namedError(name, messageOrError) {
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
function drDispatchErr(namedErr) {
    return [null, namedErr];
}
/**
 * Returns an "error" Tuple
 *
 * @param name An arbitrary value for the name of the {@link NamedError}
 * @param messageOrError Arbitrary message or Error to add to the {@link NamedError}
 * @returns - [0]Response => null
 *          - [1]Error => {@link NamedError}
 */
function drErr(name, messageOrError) {
    const err = new NamedError(name, messageOrError);
    return [null, err];
}
/**
 * Returns a "success" Tuple
 *
 * @param response Anything you want
 * @returns - [0]Response => response
 *          - [1]Error => null
 */
function drRes(response) {
    return [response, null];
}
