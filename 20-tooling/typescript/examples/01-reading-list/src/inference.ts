// TypeScript infers the type from the value; parameters are where we annotate.
let total = 0;

// Delete the @ts-expect-error line to see the error:
// Type 'string' is not assignable to type 'number'.
// @ts-expect-error total is a number.
total = 'free';

function countBooks(books: string[]) {
    return books.length;
}

console.log(total); // free
console.log(countBooks(['Dune', 'Emma'])); // 2
