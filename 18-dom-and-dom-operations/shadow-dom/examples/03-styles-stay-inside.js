// Page rules stop at the shadow boundary, shadow rules do not leak out. Inherited
// properties such as color still flow from the host into the shadow tree.
const host = document.querySelector('#card');
host.attachShadow({ mode: 'open' }); // done in the previous snippet of the lecture

host.shadowRoot.innerHTML = `
    <style>
        p { font-style: italic; }
    </style>
    <p class="title">Clean Code</p>
`;

const inside = getComputedStyle(host.shadowRoot.querySelector('p'));
const outside = getComputedStyle(document.querySelector('p'));

console.log(inside.color); // rgb(0, 0, 0)
console.log(inside.fontSize); // 16px
console.log(inside.fontStyle); // italic
console.log(outside.color); // rgb(255, 0, 0)
console.log(outside.fontStyle); // normal

host.style.color = 'navy';
console.log(inside.color); // rgb(0, 0, 128)
