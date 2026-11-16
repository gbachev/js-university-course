export const Shop = { name: 'Corner Books' };

(function (ns) {
    const vatRate = 0.2;

    ns.priceWithVat = function (price) {
        return price * (1 + vatRate);
    };
})(Shop);
