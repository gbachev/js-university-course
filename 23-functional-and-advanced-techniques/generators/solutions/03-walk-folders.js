export function* filePaths(folder, parent = '') {
    const path = parent ? `${parent}/${folder.name}` : folder.name;
    for (const file of folder.files ?? []) {
        yield `${path}/${file}`;
    }
    for (const child of folder.folders ?? []) {
        yield* filePaths(child, path);
    }
}
