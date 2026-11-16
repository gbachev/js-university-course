// An element removed from the page stays in memory while an array still holds it.
const list = document.createElement('ul');
document.body.append(list);
const rows = [];

function addBook(title) {
    const row = document.createElement('li');
    row.textContent = title;
    list.append(row);
    rows.push(row);
}

addBook('Dune');
addBook('Emma');

// considered bad practice: Dune leaves the page, not the array
rows[0].remove();
console.log(list.children.length); // 1
console.log(rows.length); // 2
console.log(rows[0].isConnected); // false

function removeBook(title) {
    const index = rows.findIndex((row) => row.textContent === title);
    rows[index].remove();
    rows.splice(index, 1); // fixed: JavaScript lets go of it too
}

addBook('Ulysses');
removeBook('Ulysses');
console.log(rows.length); // 2
