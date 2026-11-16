// Task 2: Place an order
// Lecture: The Fetch API
//
// Write the async function createOrder(order). It sends the order as JSON in a POST
// request to https://shop.example/api/orders, with the header
// 'Content-Type': 'application/json'. When the server answers 201, it returns the
// created order from the JSON body (the server adds an id). When the response is not
// ok, it throws an Error 'Order not created: status <status>'. The tests replace
// fetch() with a fake, so no request leaves our machine.
//
// Examples:
//   await createOrder({ items: ['book-1'], total: 25 })
//   // { id: 1042, items: ['book-1'], total: 25 }
//
// Run the tests: npm test -- 17-asynchronous-javascript/fetch-api

export async function createOrder(order) {
    // Your code here
}
