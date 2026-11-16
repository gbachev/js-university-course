export const INTERNAL_ID = Symbol('internal id');

export function addInternalId(product, id) {
    product[INTERNAL_ID] = id;
    return product;
}
