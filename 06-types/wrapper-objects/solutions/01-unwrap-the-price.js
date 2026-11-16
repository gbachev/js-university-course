export function unwrap(value) {
    // A primitive is boxed for the call, so valueOf() works on both.
    return value.valueOf();
}
