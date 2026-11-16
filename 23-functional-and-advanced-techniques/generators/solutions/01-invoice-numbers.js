export function* invoiceNumbers(year, start = 1) {
    let number = start;
    while (true) {
        yield `INV-${year}-${String(number++).padStart(4, '0')}`;
    }
}
