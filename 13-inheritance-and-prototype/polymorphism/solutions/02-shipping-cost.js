export class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    shippingCost() {
        throw new Error(`${this.constructor.name} must implement shippingCost()`);
    }
}

export class PhysicalProduct extends Product {
    constructor(title, price, weightInKg) {
        super(title, price);
        this.weightInKg = weightInKg;
    }

    shippingCost() {
        return 5 + Math.ceil(this.weightInKg) - 1;
    }
}

export class DigitalProduct extends Product {
    shippingCost() {
        return 0;
    }
}

export class OversizedProduct extends PhysicalProduct {
    shippingCost() {
        return super.shippingCost() + 25;
    }
}

export function totalShipping(products) {
    return products.reduce((sum, product) => sum + product.shippingCost(), 0);
}
