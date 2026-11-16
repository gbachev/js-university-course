// The worker for 02-answer-the-message.html. It runs our handleMessage() from
// 02-answer-the-message.js (or the solution, with ?solutions) for every message.
import { source } from '/lib/browser-check.js';

// We add the listener right away and wait for the import inside it: messages that arrive
// while the file is still loading are not lost.
const loading = import(source('02-answer-the-message.js'));

self.addEventListener('message', async (event) => {
    const { handleMessage } = await loading;
    self.postMessage(handleMessage(event.data));
});
