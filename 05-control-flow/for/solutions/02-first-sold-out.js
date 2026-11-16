export function findFirstSoldOut(products, stock) {
    let soldOut = null;

    for (let i = 0; i < products.length; i++) {
        if (stock[i] === 0) {
            soldOut = products[i];
            break;
        }
    }

    return soldOut;
}
