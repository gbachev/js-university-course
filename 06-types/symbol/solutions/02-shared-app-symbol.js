export function appSymbol(name) {
    return Symbol.for('app.' + name);
}
