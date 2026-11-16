export class Invoice {
    static prefix = 'INV';
    static #nextNumber = 1;

    constructor(customer, total) {
        this.customer = customer;
        this.total = total;
        this.number = Invoice.#nextNumber++;
    }

    get code() {
        return `${Invoice.prefix}-${this.number}`;
    }
}
