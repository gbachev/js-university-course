// Task 1: The order summary
// Lecture: Async/Await
//
// Write the async function getOrderSummary(orderId) with await. It finds the order
// with findOrder(), then its customer with findCustomer(order.customerId), and
// returns the text '<customer name>: <order total> EUR'. When either step fails
// (an unknown order, or an order whose customer is missing), it catches the error
// with try...catch and returns 'Order <orderId> is not available' instead.
//
// Examples:
//   await getOrderSummary(1042)   // 'Jane Doe: 60 EUR'
//   await getOrderSummary(7)      // 'Order 7 is not available'
//
// Run the tests: npm test -- 17-asynchronous-javascript/async-await

const orders = {
    1042: { id: 1042, customerId: 1, total: 60 },
    1043: { id: 1043, customerId: 9, total: 25 },
};
const customers = { 1: { id: 1, name: 'Jane Doe' } };

export function findOrder(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orders[id]) {
                resolve(orders[id]);
            } else {
                reject(new Error(`Order ${id} not found`));
            }
        }, 200);
    });
}

export function findCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (customers[id]) {
                resolve(customers[id]);
            } else {
                reject(new Error(`Customer ${id} not found`));
            }
        }, 100);
    });
}

export async function getOrderSummary(orderId) {
    // Your code here
}
