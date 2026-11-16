// Task 2: Finish the UMD wrapper
// Lecture: AMD and UMD
//
// Our shipping library must work with an AMD loader, in Node with require(), and in a
// page with a plain script tag (as the global shipping). The wrapper has the AMD and
// the global case, but not the CommonJS one, so require() in Node gets the wrong
// object. Add the CommonJS case in the right place. Then finish the factory:
// shippingCost(total) returns 0 when the total is 50 or more, and 4.99 otherwise.
// freeShippingLeft(total) returns how much more we must spend for free shipping, or 0
// when we already have it. The tests load the file in all three ways.
//
// Examples:
//   shippingCost(20)        // 4.99
//   shippingCost(50)        // 0
//   freeShippingLeft(30)    // 20
//   freeShippingLeft(80)    // 0
//
// Run the tests: npm test -- 12-modules/amd-umd

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.shipping = factory();
    }
})(this, function () {
    const FREE_SHIPPING_FROM = 50;

    function shippingCost(total) {
        // Your code here
    }

    function freeShippingLeft(total) {
        // Your code here
    }

    return { shippingCost, freeShippingLeft };
});
