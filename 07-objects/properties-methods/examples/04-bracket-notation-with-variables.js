// Bracket notation reads a property whose name is in a variable.
let user = {
    'user name': 'Jane',
    age: 30
};

for (let key in user) {
    console.log(user[key]); // Jane, then 30
}

let key = 'age';
console.log(user[key]); // 30
