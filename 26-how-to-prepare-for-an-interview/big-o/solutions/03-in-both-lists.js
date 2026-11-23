// O(n + m) time, O(m) extra space for the Set.
export function inBothLists(wishlist, inStock) {
    const stocked = new Set(inStock);
    return wishlist.filter((title) => stocked.has(title));
}
