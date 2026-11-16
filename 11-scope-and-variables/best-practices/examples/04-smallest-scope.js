const orders = [{ total: 40 }, { total: 120 }, { total: 75 }];

// considered bad practice: var leaks the loop helpers
for (var i = 0; i < orders.length; i++) {
    var isLarge = orders[i].total > 50;
}
console.log(i, isLarge); // 3 true

// better: let and const stay inside the loop
let largeCount = 0;
for (const order of orders) {
    const isBig = order.total > 50;
    if (isBig) {
        largeCount++;
    }
}
console.log(largeCount); // 2

try {
    console.log(isBig);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: isBig is not defined
}
