export function missingGlobals(names) {
    return names.filter((name) => !(name in globalThis));
}
