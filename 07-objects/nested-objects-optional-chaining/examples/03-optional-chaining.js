// ?. stops and gives undefined when the value on its left is null or undefined.
let user = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Springfield'
    }
};

console.log(user.profile?.bio); // undefined
console.log(user['profile']?.['bio']); // undefined

user.settings?.update?.(); // only calls update if settings and update exist

let list = null;
console.log(list?.[0]); // undefined
