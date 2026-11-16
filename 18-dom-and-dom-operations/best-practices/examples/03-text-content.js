// Data goes in with textContent. innerHTML is for static markup we wrote ourselves.
const list = document.querySelector('#products');

// considered bad practice: the search text becomes markup
function showNoResultsUnsafe(query) {
    list.innerHTML = `<li>No books match "${query}"</li>`;
}

// better: create the element, put the text in as text
function showNoResults(query) {
    const row = document.createElement('li');
    row.textContent = `No books match "${query}"`;
    list.replaceChildren(row);
}

showNoResults(`<b onmouseover="alert('Hi')">Dune</b>`);
console.log(list.children.length); // 1
console.log(list.querySelector('b')); // null
