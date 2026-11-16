export function itemTotal(price, quantity) {
    return price * quantity;
}

export const formatEuro = function(amount) {
    return `${amount.toFixed(2)} EUR`;
};

export const isExpensive = (price) => {
    return price > 100;
};
