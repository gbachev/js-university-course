export function serveNextCustomer(queue) {
    return queue.shift();
}
