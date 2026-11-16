// Task 3: Freeze all the way down
// Lecture: Object Immutability
//
// Our shop's price list has nested objects, like { currency: 'EUR', shipping:
// { standard: 5, express: { price: 15, days: 1 } } }. deepFreeze(obj) should freeze
// the object and every object inside it, at any depth, and return obj. Right now it
// only freezes the top level, so anyone can still change the shipping prices. Fix it.
// Some values are null, like a coupon that is not set: they stay null.
// Hint: a function can call itself for every property whose value is an object.
//
// Examples:
//   const prices = deepFreeze({ currency: 'EUR', shipping: { standard: 5 } });
//   Object.isFrozen(prices.shipping)   // true
//
// Run the tests: npm test -- 07-objects/object-immutability

export function deepFreeze(obj) {
    Object.freeze(obj);
    return obj;
}
