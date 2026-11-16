// Node's readFile() passes the error first, or null on success.
// There is no settings.json in the repository folder, so we get ENOENT.
import { readFile } from 'node:fs';

readFile('settings.json', 'utf8', (error, text) => {
    if (error) {
        console.log(`Could not read settings: ${error.code}`);
        return;
    }
    console.log(`Read ${text.length} characters`);
});

console.log('Reading settings');

// Reading settings
// Could not read settings: ENOENT (no settings.json yet)
