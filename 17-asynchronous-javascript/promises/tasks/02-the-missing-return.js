// Task 2: The missing return
// Lecture: Promises
//
// getTotalWithVat(orderId) should fulfill with the total of the order plus 20% VAT:
// 72 for order 1042, whose total is 60. findOrder() and addVat() below both return
// promises. Right now it fulfills with undefined, because one handler starts addVat()
// but does not return its promise, so the chain does not wait for it. Fix the chain.
// For an unknown order, the promise rejects with the error of findOrder().
//
// Examples:
//   getTotalWithVat(1042).then((total) => console.log(total)); // 72
//   getTotalWithVat(7).catch((error) => console.log(error.message));
//   // Order 7 not found
//
// Run the tests: npm test -- 17-asynchronous-javascript/promises

const orders = { 1042: { id: 1042, total: 60 }, 1043: { id: 1043, total: 25 } };

export function findOrder(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = orders[id];
            if (order) {
                resolve(order);
            } else {
                reject(new Error(`Order ${id} not found`));
            }
        }, 200);
    });
}

export function addVat(total) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(total * 1.2), 100);
    });
}

export function getTotalWithVat(orderId) {
    return findOrder(orderId).then((order) => {
        addVat(order.total);
    });
}
