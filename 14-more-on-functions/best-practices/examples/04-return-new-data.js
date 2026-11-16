// Better: new objects, the input stays as it was.
const items = [
    { name: 'Keyboard', price: 50 },
    { name: 'Mouse', price: 20 },
];

function discounted(list, rate) {
    return list.map((item) => ({
        ...item,
        price: item.price * (1 - rate),
    }));
}

const sale = discounted(items, 0.1);
console.log(sale[0].price, items[0].price); // 45 50
