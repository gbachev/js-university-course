// Task 3: Fix the greeting
// Lecture: Enhanced Object Literals
//
// createGreeter(name) returns an object for the welcome banner of our app: its name
// property and a greet() method that returns 'Welcome back, ' followed by the name.
// A colleague wrote greet as an arrow function, and calling it throws an error
// instead of greeting. Fix it with the method shorthand, so this is the greeter
// object. If we change the name later, greet() uses the new name.
//
// Examples:
//   createGreeter('Anna').greet()   // 'Welcome back, Anna'
//
// Run the tests: npm test -- 07-objects/enhanced-object-literals

export function createGreeter(name) {
    return {
        name,
        greet: () => {
            return 'Welcome back, ' + this.name;
        },
    };
}
