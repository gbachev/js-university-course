export function collectModules(imports, entry) {
    const found = [];

    function visit(file) {
        if (found.includes(file)) {
            return;
        }
        found.push(file);
        // A package has no entry in imports, so there is nothing more to follow.
        for (const imported of imports[file] ?? []) {
            visit(imported);
        }
    }

    visit(entry);
    return found;
}
