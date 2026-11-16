import { nanoid } from 'nanoid';

export function createBook(title) {
    return { id: nanoid(), title, read: false };
}

const book = createBook('Dune');
console.log(book.title); // Dune
console.log(book.id.length); // 21
