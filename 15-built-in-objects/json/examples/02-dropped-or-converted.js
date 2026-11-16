// Not every JavaScript value has a JSON equivalent.
const product = {
    name: 'Desk lamp',
    discount: undefined,
    describe() {
        return 'A lamp for the office';
    },
    [Symbol('sku')]: 'LMP-01',
    price: NaN,
    stock: Infinity,
    addedAt: new Date('2026-11-15T09:30:00Z'),
    tags: new Set(['office', 'light']),
    sizes: [undefined, 'M', () => {}]
};

console.log(JSON.stringify(product));
// {"name":"Desk lamp","price":null,"stock":null,"addedAt":"2026-11-15T09:30:00.000Z","tags":{},"sizes":[null,"M",null]}
console.log(JSON.stringify([...product.tags])); // ["office","light"]

// A BigInt makes JSON.stringify() throw.
try {
    console.log(JSON.stringify({ views: 10n }));
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Do not know how to serialize a BigInt
}
