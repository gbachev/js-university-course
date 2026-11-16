export class Subscription {
    constructor(plan, pricePerMonth) {
        this.plan = plan;
        this.pricePerMonth = pricePerMonth;
    }

    yearlyPrice() {
        return this.pricePerMonth * 12;
    }

    label() {
        return `${this.plan}: ${this.pricePerMonth} EUR per month`;
    }
}
