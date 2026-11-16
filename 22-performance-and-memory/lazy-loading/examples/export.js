// src/export.js: loaded only when the user asks for an export.
const cell = (text) => '"' + text.replaceAll('"', '""') + '"';

export function toCsv(books) {
    const rows = books.map((b) => cell(b.title) + ',' + cell(b.author));
    return ['title,author', ...rows].join('\n');
}
