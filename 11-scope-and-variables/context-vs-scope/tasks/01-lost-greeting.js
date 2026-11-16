// Task 1: The lost greeting
// Lecture: Context vs Scope
//
// getGreeter(user) returns a function that we call later, on its own, to greet the
// user. Right now it returns user.greet as it is. Once that function is called without
// user before the dot, its this is undefined and the call throws a TypeError. Fix it:
// return a function whose this is always the user, whoever calls it.
//
// Examples:
//   const user = { name: 'Ada', greet() { return 'Hi, ' + this.name; } };
//   const greet = getGreeter(user);
//   greet()   // 'Hi, Ada'
//
// Run the tests: npm test -- 11-scope-and-variables/context-vs-scope

export function getGreeter(user) {
    return user.greet;
}
