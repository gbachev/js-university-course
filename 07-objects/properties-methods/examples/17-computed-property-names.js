// An expression in square brackets becomes the property name.
let keyRole = 'role';

let user = {
    name: 'Ivy',
    [keyRole]: 'admin'
};

console.log(user.role); // admin
console.log(user[keyRole]); // admin
