export class ConsoleLogger {
    log(message) {
        console.log(message);
    }
}

export class Checkout {
    #logger;

    constructor(logger) {
        this.#logger = logger;
    }

    pay(total) {
        this.#logger.log(`Paid ${total.toFixed(2)} EUR`);
        return 'paid';
    }
}
