export function withDiscount(product, percent) {
    // A new object literal, so the product we got stays untouched.
    return {
        name: product.name,
        price: product.price - (product.price * percent) / 100,
    };
}
