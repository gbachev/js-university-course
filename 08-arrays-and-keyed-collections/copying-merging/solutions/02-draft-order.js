export function addToDraft(order, product) {
    // const draft = order would only copy the reference, so we copy the array itself.
    const draft = [...order];
    draft.push(product);
    return draft;
}
