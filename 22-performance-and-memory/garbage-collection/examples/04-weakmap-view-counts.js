// A WeakMap keeps data about objects we do not own, without keeping the objects alive.
const views = new WeakMap();

function trackView(product) {
    const count = (views.get(product) ?? 0) + 1;
    views.set(product, count);
    return count;
}

// objects created by a library we do not own
let products = [
    { id: 1, title: 'Desk lamp' },
    { id: 2, title: 'Mug' },
];

console.log(trackView(products[0])); // 1
console.log(trackView(products[0])); // 2
console.log(views.has(products[1])); // false

products = null; // the counts can go together with the products
