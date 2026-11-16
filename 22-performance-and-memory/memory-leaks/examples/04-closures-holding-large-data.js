// A closure keeps every variable it uses, even a big array it only reads once.
const orders = Array.from({ length: 100_000 }, (_, i) => ({
    id: i,
    total: 20,
}));

// considered bad practice: orders.length keeps every order alive
function createSummary(orders) {
    const revenue = orders.reduce((sum, o) => sum + o.total, 0);
    return () => `${orders.length} orders, ${revenue} EUR`;
}

// fixed: the closure keeps two numbers, not the array
function createSummaryFixed(orders) {
    const count = orders.length;
    const revenue = orders.reduce((sum, o) => sum + o.total, 0);
    return () => `${count} orders, ${revenue} EUR`;
}

console.log(createSummaryFixed(orders)());
// 100000 orders, 2000000 EUR
