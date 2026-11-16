// An AMD module: it needs an AMD loader such as RequireJS (see the README).
define([], function () {
    function formatPrice(amount) {
        return `€${amount.toFixed(2)}`;
    }

    return { formatPrice };
});
