export function getPriceRange(minPrice, maxPrice) {
    if (minPrice > maxPrice) {
        [minPrice, maxPrice] = [maxPrice, minPrice];
    }

    return [minPrice, maxPrice];
}
