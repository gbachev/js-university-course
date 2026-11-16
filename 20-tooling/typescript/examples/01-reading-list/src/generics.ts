// T is a type parameter, filled in at each call.
import type { Book } from './types.ts';

function first<T>(items: T[]): T | undefined {
    return items[0];
}

const shelf: Array<Book> = [];
const nextBook = first(shelf); // Book | undefined
console.log(nextBook); // undefined
console.log(first([1965, 1815])); // 1965
