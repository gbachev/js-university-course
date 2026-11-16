const discounts = {
    none: (price) => price,
    tenPercent: (price) => price * 0.9,
    blackFriday: (price) => price * 0.5,
};

export function applySavedDiscount(saved, price) {
    const settings = JSON.parse(saved);
    // Object.hasOwn keeps out keys like 'toString' that every object inherits.
    const apply = Object.hasOwn(discounts, settings.discount)
        ? discounts[settings.discount]
        : discounts.none;
    return apply(price);
}
