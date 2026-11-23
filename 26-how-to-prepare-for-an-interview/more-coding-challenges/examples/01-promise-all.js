function promiseAll(items) {
    return new Promise((resolve, reject) => {
        const results = [];
        let pending = items.length;
        if (pending === 0) {
            resolve(results);
            return;
        }
        items.forEach((item, index) => {
            Promise.resolve(item).then((value) => {
                results[index] = value;
                pending--;
                if (pending === 0) {
                    resolve(results);
                }
            }, reject);
        });
    });
}

function later(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}

function fail(reason, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(reason)), ms);
    });
}

promiseAll([]).then((results) => console.log(results)); // []

promiseAll([later('product', 300), fail('stock is down', 100)])
    .catch((error) => console.log(error.message));
// stock is down

promiseAll([later('product', 300), later('reviews', 100), 42])
    .then((results) => console.log(results));
// ['product', 'reviews', 42]
