// Task 3: Account options
// Lecture: Parameters and Arguments
//
// Write createAccount(options), which takes one object with the options of a new
// account and returns a new object with three properties: email, plan and
// newsletter. Destructure the options in the parameter list. A missing plan is
// 'free' and a missing newsletter is false. createAccount() with no argument at all
// must not throw: it returns an account with email undefined and the two defaults.
//
// Examples:
//   createAccount({ email: 'ana@example.com' })
//   // { email: 'ana@example.com', plan: 'free', newsletter: false }
//   createAccount({ email: 'kai@example.com', plan: 'pro', newsletter: true })
//   // { email: 'kai@example.com', plan: 'pro', newsletter: true }
//
// Run the tests: npm test -- 10-functions/params-args

export function createAccount(options) {
    // Your code here
}
