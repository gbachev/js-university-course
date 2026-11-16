(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.shipping = factory();
    }
})(this, function () {
    const FREE_SHIPPING_FROM = 50;

    function shippingCost(total) {
        return total >= FREE_SHIPPING_FROM ? 0 : 4.99;
    }

    function freeShippingLeft(total) {
        return Math.max(FREE_SHIPPING_FROM - total, 0);
    }

    return { shippingCost, freeShippingLeft };
});
