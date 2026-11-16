// Task 3: Send a notification
// Lecture: Nested Objects and Optional Chaining
//
// Some users of our app have set up notifications: their user object has a settings
// object, with a notifier object inside it, and the notifier has a send(message)
// method that returns what it sent. Write notify(user, message): it calls
// user.settings.notifier.send(message) and returns what send returns. When settings,
// the notifier or the send method is missing, it does not throw: it returns 'not sent'.
//
// Examples:
//   const user = { settings: { notifier: { send: (text) => 'sent: ' + text } } };
//   notify(user, 'Your order shipped')   // 'sent: Your order shipped'
//   notify({ name: 'Ben' }, 'Hello')     // 'not sent'
//
// Run the tests: npm test -- 07-objects/nested-objects-optional-chaining

export function notify(user, message) {
    // Your code here
}
