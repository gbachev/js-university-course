// Inside an I/O callback: nextTick, then promises, then the check phase, then timers.
import { readFile } from 'node:fs';

readFile(import.meta.filename, () => {
    setTimeout(() => console.log('setTimeout'), 0);
    setImmediate(() => console.log('setImmediate'));
    Promise.resolve().then(() => console.log('promise'));
    process.nextTick(() => console.log('nextTick'));
    console.log('File read');
});

// File read
// nextTick
// promise
// setImmediate
// setTimeout
