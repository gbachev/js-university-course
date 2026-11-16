// JSON.stringify() turns a value into a compact JSON string.
const order = {
    id: 1042,
    customer: 'John Doe',
    items: ['notebook', 'pen'],
    paid: true,
    coupon: null
};

const text = JSON.stringify(order);

console.log(text);
// {"id":1042,"customer":"John Doe","items":["notebook","pen"],"paid":true,"coupon":null}
console.log(typeof text); // string

// The third argument sets the indentation: 4 spaces here.
console.log(JSON.stringify(order, null, 4));
// {
//     "id": 1042,
//     "customer": "John Doe",
//     "items": [
//         "notebook",
//         "pen"
//     ],
//     "paid": true,
//     "coupon": null
// }
