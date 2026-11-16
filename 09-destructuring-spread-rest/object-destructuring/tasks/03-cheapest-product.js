// Task 3: The cheapest product
// Lecture: Object Destructuring
//
// findCheapest(products) gets an array of products like { name: 'Mouse', price: 25 }
// and should return { name, price } of the cheapest one, or null when the array is
// empty. A colleague wrote it with destructuring, but it always returns null. The
// values never reach the variables declared at the top of the function. Fix the
// destructuring line so it assigns to the existing variables.
//
// Examples:
//   findCheapest([{ name: 'Laptop', price: 1299 }, { name: 'Mouse', price: 25 }])
//   // { name: 'Mouse', price: 25 }
//   findCheapest([])   // null
//
// Run the tests: npm test -- 09-destructuring-spread-rest/object-destructuring

export function findCheapest(products) {
    let name;
    let price = Infinity;

    for (const product of products) {
        if (product.price < price) {
            let { name, price } = product;
        }
    }

    if (name === undefined) {
        return null;
    }

    return { name, price };
}
