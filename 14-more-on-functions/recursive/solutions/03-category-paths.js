export function categoryPaths(categories, parentPath = '') {
    const paths = [];
    for (const category of categories) {
        const path = parentPath ? `${parentPath} > ${category.name}` : category.name;
        paths.push(path);
        if (category.children) {
            paths.push(...categoryPaths(category.children, path));
        }
    }
    return paths;
}
