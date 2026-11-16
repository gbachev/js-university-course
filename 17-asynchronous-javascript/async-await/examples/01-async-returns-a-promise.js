// An async function always returns a promise: return fulfills it, throw rejects it.
async function getTotal() {
    return 60;
}

async function getCart() {
    throw new Error('Cart is empty');
}

const result = getTotal();
console.log(result instanceof Promise); // true

result.then((total) => console.log(total)); // 60

getCart().catch((error) => console.log(error.message));
// Cart is empty
