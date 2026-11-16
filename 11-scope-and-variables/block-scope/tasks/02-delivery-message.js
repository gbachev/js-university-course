// Task 2: The delivery message
// Lecture: Block Scope
//
// deliveryMessage(method) returns the message we show for a delivery method. The days
// variable used to be a var. After we changed it to let, 'express' and 'standard'
// throw a ReferenceError: all cases of a switch share one block, and days is declared
// in the 'pickup' case only. Fix it by giving every case its own block with its own
// declaration. An unknown method gets 'Unknown delivery method'.
//
// Examples:
//   deliveryMessage('pickup')     // 'Ready for pickup in 0 days'
//   deliveryMessage('express')    // 'Arrives in 2 days'
//   deliveryMessage('standard')   // 'Arrives in 5 days'
//
// Run the tests: npm test -- 11-scope-and-variables/block-scope

export function deliveryMessage(method) {
    switch (method) {
        case 'pickup':
            let days = 0;
            return `Ready for pickup in ${days} days`;
        case 'express':
            days = 2;
            return `Arrives in ${days} days`;
        case 'standard':
            days = 5;
            return `Arrives in ${days} days`;
        default:
            return 'Unknown delivery method';
    }
}
