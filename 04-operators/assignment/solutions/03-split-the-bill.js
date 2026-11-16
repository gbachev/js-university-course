export function splitBill(total, tipPercent, people) {
    total += (total * tipPercent) / 100;
    total /= people;
    return total;
}
