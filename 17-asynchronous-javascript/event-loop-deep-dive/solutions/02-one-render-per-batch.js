export function createBatcher(render) {
    let changes = [];

    return (change) => {
        changes.push(change);
        // Only the first change of a batch queues the render.
        if (changes.length === 1) {
            queueMicrotask(() => {
                const batch = changes;
                changes = [];
                render(batch);
            });
        }
    };
}
