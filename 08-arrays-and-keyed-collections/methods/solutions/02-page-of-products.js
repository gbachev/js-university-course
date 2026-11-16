export function getPage(products, page, pageSize) {
    const start = (page - 1) * pageSize;

    // slice() does not include the end index and never changes the original array.
    return products.slice(start, start + pageSize);
}
