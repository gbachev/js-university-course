export const discountedPrice = (price, percent) =>
    Math.round(price * (100 - percent)) / 100;

export const shippingFor = total => (total >= 50 ? 0 : 4.99);
