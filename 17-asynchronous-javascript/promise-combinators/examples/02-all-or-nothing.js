// One rejection rejects the whole Promise.all(), and the other results are lost.
function later(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}

function failLater(message, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(message)), ms);
    });
}

Promise.all([
    later({ title: 'Clean Code' }, 300),
    later([5, 4, 5], 200),
    failLater('Stock service is down', 100),
])
    .then((results) => console.log(results))
    .catch((error) => console.log(error.message));
// Stock service is down (after about 100 ms)
