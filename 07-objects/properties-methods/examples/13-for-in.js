// for...in goes through the inherited enumerable properties too.
let base = { inherited: true };
let obj = Object.create(base);
obj.own = 'value';

for (let key in obj) {
    console.log(key); // logs 'own' and 'inherited'
}

// hasOwnProperty() skips the inherited ones.
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key); // logs only 'own'
    }
}
