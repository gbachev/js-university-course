import { nanoid } from 'nanoid';

export function createBook(title) {
    return { id: nanoid(), title, read: false };
}
