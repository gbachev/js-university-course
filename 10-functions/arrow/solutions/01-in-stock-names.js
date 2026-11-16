export const inStockNames = (products) =>
    products.filter(product => product.stock > 0).map(product => product.name);
