// considered bad practice: var hides the mistake
console.log(discount); // undefined
var discount = 0.1;

// better: const throws before we get a wrong total
try {
    console.log(shipping);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Cannot access 'shipping' before initialization
    // (Chrome and Node wording)
}
const shipping = 5;
