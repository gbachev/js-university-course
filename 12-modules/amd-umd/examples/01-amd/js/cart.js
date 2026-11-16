// An AMD module: the loader passes the 'prices' module in as the prices parameter.
define(['prices'], function (prices) {
    function cartTotal(items) {
        let total = 0;
        for (const item of items) {
            total += item.price;
        }
        return prices.formatPrice(total);
    }

    return { cartTotal };
});
