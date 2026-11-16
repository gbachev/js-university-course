// Task 2: A draft of the order
// Lecture: Copying and Merging Arrays
//
// Before the customer confirms a change, we show a draft of the order with one more
// product in it. The function addToDraft(order, product) should return a new array
// with all the products of the order and the new product at the end, and leave the
// order itself as it is. Right now the confirmed order changes too, because the draft
// is not a copy. Fix it.
//
// Examples:
//   const order = ['mug', 'tea'];
//   addToDraft(order, 'jam')   // [ 'mug', 'tea', 'jam' ]
//   order                      // still [ 'mug', 'tea' ]
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/copying-merging

export function addToDraft(order, product) {
    const draft = order;
    draft.push(product);
    return draft;
}
