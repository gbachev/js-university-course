// Task 2: Repeat an order
// Lecture: Object Cloning and Merging
//
// The "Order again" button copies an old order so the customer can change the copy
// before paying, for example the delivery city. repeatOrder(order) returns the copy,
// but customers complain that changing the city of the new order also changes the city
// of their old order. Fix it: the copy must not share anything with the old order,
// not even the nested address object. The copy still has all the same values.
//
// Examples:
//   const old = { id: 1, total: 30, address: { city: 'Sofia' } };
//   const copy = repeatOrder(old);
//   copy.address.city = 'Varna';
//   old.address.city   // 'Sofia'
//
// Run the tests: npm test -- 07-objects/clone-merge

export function repeatOrder(order) {
    return { ...order };
}
