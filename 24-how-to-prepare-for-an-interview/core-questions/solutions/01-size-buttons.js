export function createSizeHandlers(sizes) {
    const handlers = [];
    // let gives every iteration its own i, so every handler keeps its own size.
    for (let i = 0; i < sizes.length; i++) {
        handlers.push(() => `Size ${sizes[i]}`);
    }
    return handlers;
}
