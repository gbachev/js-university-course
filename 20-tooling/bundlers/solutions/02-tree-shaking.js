export function treeShake(exportsByFile, imports) {
    const result = {};
    for (const [file, names] of Object.entries(exportsByFile)) {
        result[file] = names.filter((name) =>
            imports.some(
                (statement) => statement.from === file && statement.names.includes(name),
            ),
        );
    }
    return result;
}
