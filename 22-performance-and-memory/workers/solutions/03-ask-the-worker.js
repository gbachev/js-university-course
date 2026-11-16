export function askWorker(worker, data) {
    return new Promise((resolve, reject) => {
        worker.addEventListener('message', (event) => {
            const { ok, result, error } = event.data;
            if (ok) {
                resolve(result);
            } else {
                reject(new Error(error));
            }
        }, { once: true });
        worker.postMessage(data);
    });
}
