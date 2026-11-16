// Task 3: The full name
// Lecture: Property Descriptors and Object.defineProperty
//
// Our contact list stores firstName and lastName, but most screens want the full name.
// Write addFullName(person): with Object.defineProperty it adds a fullName accessor
// to the person. Reading it gives the first and the last name with a space between
// them. Assigning a string like 'Jane Smith' to it sets firstName to the part before
// the space and lastName to the part after it. fullName stays out of Object.keys(),
// because the real data is in firstName and lastName. It returns the person.
//
// Examples:
//   const person = addFullName({ firstName: 'John', lastName: 'Doe' });
//   person.fullName                 // 'John Doe'
//   person.fullName = 'Jane Smith';
//   person.firstName                // 'Jane'
//
// Run the tests: npm test -- 07-objects/property-descriptors-define-property

export function addFullName(person) {
    // Your code here
}
