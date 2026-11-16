export const pipe = (...fns) => (x) =>
    fns.reduce((value, fn) => fn(value), x);

export const subtotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.qty, 0);

export const round = (total) => Math.round(total * 100) / 100;

export const applyDiscount = (rate) => (total) => total * (1 - rate);

export const addTax = (rate) => (total) => total * (1 + rate);

export const checkoutTotal = (discountRate, taxRate) =>
    pipe(subtotal, applyDiscount(discountRate), addTax(taxRate), round);
