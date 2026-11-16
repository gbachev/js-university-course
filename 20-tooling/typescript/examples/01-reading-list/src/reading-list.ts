// The book below has no read property. Delete the @ts-expect-error line
// and npm run typecheck reports:
// Error: Property 'read' is missing in type
// '{ key: string; ... }' but required in type 'Book'.
import type { ReadingList } from './types.ts';

const list: ReadingList = {
    owner: 'Jane Doe',
    books: [
        // @ts-expect-error The book has no read property.
        {
            key: '/works/OL893414W',
            title: 'Dune',
            author: 'Frank Herbert',
            year: 1965,
            coverId: 11481354,
        },
    ],
};

console.log(list.books.length); // 1
