// attachShadow() gives the element a shadow root.
// document.querySelector() does not look inside it.
const host = document.querySelector('#card');
const shadow = host.attachShadow({ mode: 'open' });
shadow.innerHTML = `<p class="title">Clean Code</p>`;

console.log(host.shadowRoot === shadow); // true
console.log(host.children.length); // 0
console.log(shadow.children.length); // 1
console.log(document.querySelectorAll('p').length); // 1
console.log(document.querySelector('.title')); // null
console.log(shadow.querySelector('.title').textContent);
// Clean Code
