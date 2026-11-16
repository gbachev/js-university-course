export function serveNext(queue) {
    const [current, ...waiting] = queue;

    return { current, waiting };
}
