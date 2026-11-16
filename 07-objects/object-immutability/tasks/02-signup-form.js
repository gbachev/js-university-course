// Task 2: The sign-up form
// Lecture: Object Immutability
//
// The sign-up form of our app keeps what the user typed in an object with exactly two
// fields, email and password, both empty at the start. The user can type into them as
// often as they like, but no code may add a new field or remove one, so a typo like
// form.emial = '...' throws instead of quietly adding a field. Write createSignupForm():
// it returns such an object. Pick the method that allows new values but no new or
// deleted properties.
//
// Examples:
//   const form = createSignupForm();
//   form.email = 'anna@example.com';   // works
//   form.emial = 'anna@example.com';   // TypeError
//
// Run the tests: npm test -- 07-objects/object-immutability

export function createSignupForm() {
    // Your code here
}
