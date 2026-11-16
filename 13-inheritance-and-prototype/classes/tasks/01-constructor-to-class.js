// Task 1: From constructor function to class
// Lecture: Classes
//
// Our streaming service still builds subscriptions with an old constructor function.
// Rewrite Subscription as a class with the same name, the same constructor
// parameters (plan, pricePerMonth) and the same two methods. The tests check that
// everything still works, and also what the class gives us: the methods are not
// enumerable, so for...in on a subscription lists only its own data, and a call
// without new throws a TypeError that says new is missing, not a vague one about
// setting a property of undefined.
//
// Examples:
//   const basic = new Subscription('basic', 5);
//   basic.yearlyPrice()       // 60
//   basic.label()             // 'basic: 5 EUR per month'
//   Object.keys(Subscription.prototype)   // []
//
// Run the tests: npm test -- 13-inheritance-and-prototype/classes

export function Subscription(plan, pricePerMonth) {
    this.plan = plan;
    this.pricePerMonth = pricePerMonth;
}

Subscription.prototype.yearlyPrice = function () {
    return this.pricePerMonth * 12;
};

Subscription.prototype.label = function () {
    return `${this.plan}: ${this.pricePerMonth} EUR per month`;
};
