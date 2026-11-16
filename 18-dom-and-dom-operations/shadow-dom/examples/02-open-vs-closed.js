// A closed root is not reachable through shadowRoot. An element takes only one root.
const box = document.createElement('div');
const root = box.attachShadow({ mode: 'closed' });

console.log(box.shadowRoot); // null
console.log(root.mode); // closed

try {
    box.attachShadow({ mode: 'open' });
} catch (error) {
    console.log(error.name); // NotSupportedError
}
