export function getDiscountPercent(memberLevel) {
    let discount;

    switch (memberLevel) {
        case 'gold':
            discount = 20;
            break;
        case 'silver':
            discount = 10;
            break;
        case 'bronze':
            discount = 5;
            break;
        default:
            discount = 0;
    }

    return discount;
}
