// Union types, narrowed with ===, in, typeof and instanceof.
import type { Book } from './types.ts';

type Found = { books: Book[] };
type Failed = { error: string };

function yearText(book: Book): string {
    if (book.year === null) {
        return 'year unknown';
    }
    return book.year.toString();
}

function statusText(result: Found | Failed): string {
    if ('error' in result) {
        return `Search failed: ${result.error}`;
    }
    return `${result.books.length} books found`;
}

function toPage(page: string | number): number {
    return typeof page === 'string' ? Number(page) : page;
}

function addedOn(added: Date | string): string {
    if (added instanceof Date) {
        return added.toISOString().slice(0, 10);
    }
    return added;
}

const failed = { error: 'Offline' };
console.log(statusText(failed)); // Search failed: Offline
console.log(toPage('2') + 1); // 3
console.log(addedOn(new Date('2026-11-16'))); // 2026-11-16

const emma: Book = {
    key: '/works/OL66562W',
    title: 'Emma',
    author: 'Jane Austen',
    year: null,
    coverId: null,
    read: false,
};
console.log(yearText(emma)); // year unknown
