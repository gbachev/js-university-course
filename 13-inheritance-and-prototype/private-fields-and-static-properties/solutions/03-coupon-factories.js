export class Coupon {
    #kind;
    #value;

    constructor(kind, value) {
        this.#kind = kind;
        this.#value = value;
    }

    static percent(value) {
        return new Coupon('percent', value);
    }

    static fixed(value) {
        return new Coupon('fixed', value);
    }

    static isCoupon(object) {
        return #kind in object;
    }

    apply(total) {
        const discount =
            this.#kind === 'percent' ? (total * this.#value) / 100 : this.#value;
        return Math.max(total - discount, 0);
    }
}
