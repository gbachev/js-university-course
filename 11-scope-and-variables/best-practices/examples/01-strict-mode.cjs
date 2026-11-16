// This file ends in .cjs, so Node runs it as a plain script, and the directive at
// the top of the file, before any other statement, is what turns strict mode on.
// (Every .js file of this repository is a module, and modules are strict without it.)
'use strict';

function applyDiscount(order) {
    totl = order.total * 0.9; // a typo: we meant total
    return order;
}

try {
    applyDiscount({ total: 100 });
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: totl is not defined (Chrome and Node wording)
}
