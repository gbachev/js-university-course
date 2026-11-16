// textContent keeps user input as text. innerHTML turns it into markup, and code runs.
// a book title typed in by a user
const title = `<img src="x" onerror="alert('Hacked')">`;
const list = document.querySelector('ul');

const safe = document.createElement('li');
safe.textContent = title;
list.append(safe);
console.log(safe.children.length); // 0

const unsafe = document.createElement('li');
unsafe.innerHTML = title;
list.append(unsafe);
console.log(unsafe.firstElementChild.nodeName); // IMG
// an alert says "Hacked": the attacker's code ran
