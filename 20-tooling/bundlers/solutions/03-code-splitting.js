function collect(modules, start, skip) {
    const found = [];

    function visit(file) {
        if (found.includes(file) || skip.includes(file)) {
            return;
        }
        found.push(file);
        for (const imported of modules[file]?.imports ?? []) {
            visit(imported);
        }
    }

    visit(start);
    return found;
}

export function splitChunks(modules, entry) {
    const main = collect(modules, entry, []);
    const chunks = [];
    for (const file of main) {
        for (const loaded of modules[file]?.dynamic ?? []) {
            const chunk = collect(modules, loaded, main);
            if (chunk.length > 0) {
                chunks.push(chunk);
            }
        }
    }
    return { main, chunks };
}
