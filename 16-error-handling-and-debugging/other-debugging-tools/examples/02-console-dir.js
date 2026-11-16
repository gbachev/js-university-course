// console.log() stops after two levels of nesting; console.dir() with depth: null does not.
const settings = {
    user: {
        name: 'Jane Doe',
        preferences: { theme: { mode: 'dark' } },
    },
};

console.log(settings);
// { user: { name: 'Jane Doe', preferences: { theme: [Object] } } }

console.dir(settings, { depth: null });
// {
//   user: { name: 'Jane Doe', preferences: { theme: { mode: 'dark' } } }
// }
