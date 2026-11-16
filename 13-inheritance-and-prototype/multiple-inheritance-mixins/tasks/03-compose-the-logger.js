// Task 3: Compose instead of inherit
// Lecture: Multiple Inheritance / Mixins
//
// Our Checkout extends ConsoleLogger only to get a log() method. Now we want to log to
// a file in production and to a fake logger in tests, and the parent class is in the
// way. Refactor Checkout to composition: it no longer extends anything, its
// constructor takes a logger, keeps it in a private field #logger, and pay(total)
// calls the logger's log() with a line like 'Paid 20.00 EUR' and returns 'paid'.
// Any object with a log(message) method works as a logger.
//
// Examples:
//   const checkout = new Checkout(new ConsoleLogger());
//   checkout.pay(20)            // logs 'Paid 20.00 EUR', returns 'paid'
//
// Run the tests: npm test -- 13-inheritance-and-prototype/multiple-inheritance-mixins

export class ConsoleLogger {
    log(message) {
        console.log(message);
    }
}

export class Checkout extends ConsoleLogger {
    pay(total) {
        this.log(`Paid ${total.toFixed(2)} EUR`);
        return 'paid';
    }
}
