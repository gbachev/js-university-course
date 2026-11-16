// Task 3: The saved discount
// Lecture: Function Properties and Serialization
//
// The shop saves the chosen discount as JSON, like '{"discount":"tenPercent"}', and
// applySavedDiscount(saved, price) applies it to a price. It runs the saved text
// with eval(), so anyone who can change the saved settings can run any code in our
// shop. Rewrite it with a lookup object of functions: the key from the JSON picks a
// discount function, and no string ever runs as code. A key we do not know, text
// that is not a key at all, or a key every object inherits, such as 'toString',
// leaves the price as it is.
//
// Examples:
//   applySavedDiscount('{"discount":"tenPercent"}', 80)      // 72
//   applySavedDiscount('{"discount":"blackFriday"}', 80)     // 40
//   applySavedDiscount('{"discount":"summer"}', 80)          // 80
//
// Run the tests: npm test -- 14-more-on-functions/properties-serialization

function none(price) {
    return price;
}

function tenPercent(price) {
    return price * 0.9;
}

function blackFriday(price) {
    return price * 0.5;
}

export function applySavedDiscount(saved, price) {
    const settings = JSON.parse(saved);
    return eval(`${settings.discount}(${price})`);
}
