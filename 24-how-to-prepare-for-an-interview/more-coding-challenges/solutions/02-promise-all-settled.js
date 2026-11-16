export function promiseAllSettled(items) {
    return new Promise((resolve) => {
        const results = [];
        let pending = items.length;
        if (pending === 0) {
            resolve(results);
            return;
        }
        items.forEach((item, index) => {
            Promise.resolve(item)
                .then(
                    (value) => ({ status: 'fulfilled', value }),
                    (reason) => ({ status: 'rejected', reason }),
                )
                .then((result) => {
                    results[index] = result;
                    pending--;
                    if (pending === 0) {
                        resolve(results);
                    }
                });
        });
    });
}
