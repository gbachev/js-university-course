// JSON.stringify turns the object into a string, JSON.parse builds a new object from it.
let original = { person: { name: 'John Doe' } };
let copy = JSON.parse(JSON.stringify(original));

copy.person.name = 'Jane Doe';
console.log(original.person.name); // John Doe
