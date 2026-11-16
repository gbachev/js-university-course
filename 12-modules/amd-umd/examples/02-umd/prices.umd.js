// One file for an AMD loader, for CommonJS and for a plain script tag.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.prices = factory();
    }
})(this, function () {
    function formatPrice(amount) {
        return `€${amount.toFixed(2)}`;
    }

    return { formatPrice };
});
