export function findCheapest(products) {
    let name;
    let price = Infinity;

    for (const product of products) {
        if (product.price < price) {
            // Parentheses, so the braces are not read as a block.
            ({ name, price } = product);
        }
    }

    if (name === undefined) {
        return null;
    }

    return { name, price };
}
