export function yearsToDouble(savings, rate) {
    if (rate <= 0) {
        return -1;
    }

    const target = savings * 2;
    let balance = savings;
    let years = 0;

    while (balance < target) {
        balance += (balance * rate) / 100;
        years++;
    }

    return years;
}
