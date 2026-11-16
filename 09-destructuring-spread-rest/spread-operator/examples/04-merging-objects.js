// Three objects merged into one user profile.
const personalInfo = { name: 'John', age: 30 };
const contactInfo = { email: 'john@example.com', phone: '123-456-7890' };
const preferences = { theme: 'dark', notifications: true };

const userProfile = { ...personalInfo, ...contactInfo, ...preferences };

console.log(userProfile);
// {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com',
//   phone: '123-456-7890',
//   theme: 'dark',
//   notifications: true
// }
