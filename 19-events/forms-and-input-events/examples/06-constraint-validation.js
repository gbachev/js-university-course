const form = document.querySelector("#add-book");
const { title, isbn, friend } = form.elements;

isbn.value = "12345";
friend.value = "john.doe";

console.log(form.checkValidity()); // false
console.log(title.validity.valueMissing); // true
console.log(isbn.validity.patternMismatch); // true
console.log(friend.validity.typeMismatch); // true
console.log(title.validationMessage); // Please fill out this field.
console.log(form.reportValidity()); // false

title.value = "Dune";
isbn.value = "9780441013593";
friend.value = "john.doe@example.com";
console.log(form.checkValidity()); // true
