// The fix is one call: Number() turns the price into a number before we add it.
function addItem(total, item) {
    return total + Number(item.price);
}

console.log(addItem(15, { name: 'Backpack', price: '40' })); // 55
