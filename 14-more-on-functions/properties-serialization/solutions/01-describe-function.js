export function describeFunction(fn) {
    const name = fn.name === '' ? 'anonymous' : fn.name;
    return `${name}(${fn.length})`;
}
