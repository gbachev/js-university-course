// Task 2: Invoice numbers
// Lecture: Private Fields and Static Properties
//
// Every invoice our shop sends needs the next number in line. Finish the Invoice
// class. It has a public static field prefix, 'INV', and a private static counter,
// #nextNumber, that starts at 1. The constructor takes customer and total and stores
// the next number in this.number. The code getter returns the prefix and the
// number joined with a dash, like 'INV-1'. The prefix belongs to the class, so an
// invoice has no prefix of its own.
//
// Examples:
//   const first = new Invoice('Jane Doe', 49);
//   const second = new Invoice('John Doe', 25);
//   second.number - first.number   // 1
//   first.code                     // 'INV-1'
//   Invoice.prefix                 // 'INV'
//
// Run the tests: npm test -- 13-inheritance-and-prototype/private-fields-and-static-properties

export class Invoice {
    // Your code here

    constructor(customer, total) {
        this.customer = customer;
        this.total = total;
    }
}
