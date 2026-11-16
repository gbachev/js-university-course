// The value attribute holds the default, the value property the current value.
const search = document.createElement('input');
search.setAttribute('value', 'Dune');
document.body.prepend(search);

search.value = 'Emma'; // or type Emma into the box

console.log(search.value); // Emma
console.log(search.getAttribute('value')); // Dune
console.log(search.defaultValue); // Dune

const read = document.createElement('input');
read.type = 'checkbox';
read.checked = true;
console.log(read.checked); // true
console.log(read.getAttribute('checked')); // null
console.log(read.getAttribute('type')); // checkbox
