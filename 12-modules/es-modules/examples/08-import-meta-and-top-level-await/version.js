import { readFile } from 'node:fs/promises';

// The VERSION file next to this module, wherever we start node from.
const file = new URL('./VERSION', import.meta.url);

console.log(file.href); // file:///.../08-import-meta-and-top-level-await/VERSION

export const version = (await readFile(file, 'utf8')).trim();
