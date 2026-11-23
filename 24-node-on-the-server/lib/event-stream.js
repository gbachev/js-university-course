// Opens an event stream for a test and reads it one message at a time, with Node's fetch().
//
//   import { openStream } from '../../lib/event-stream.js';
//   const stream = await openStream(`${server.url}/events`);
//   stream.response.status                 200
//   await stream.next()                    'data: 2 books\n\n'
//   stream.close()
//
// next() gives the next message with its blank line. It gives undefined when nothing more
// came within the wait (1 second, or the milliseconds we pass), and null when the server
// ended the stream. The request gives up after 5 seconds, so a route that never answers
// fails its test instead of hanging the run.
export async function openStream(url, headers = {}) {
    const controller = new AbortController();
    const response = await fetch(url, {
        headers,
        signal: AbortSignal.any([controller.signal, AbortSignal.timeout(5000)]),
    });
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let text = '';
    let pending;

    async function next(wait = 1000) {
        while (!text.includes('\n\n')) {
            if (!pending) {
                pending = reader.read();
                // close() rejects a read still waiting; nobody needs that error.
                pending.catch(() => {});
            }

            let timer;
            const timeout = new Promise((resolve) => {
                timer = setTimeout(resolve, wait, 'timeout');
            });
            const result = await Promise.race([pending, timeout]);
            clearTimeout(timer);

            if (result === 'timeout') {
                return undefined;
            }
            pending = undefined;
            if (result.done) {
                const rest = text;
                text = '';
                return rest === '' ? null : rest;
            }
            text += decoder.decode(result.value, { stream: true });
        }

        const end = text.indexOf('\n\n') + 2;
        const message = text.slice(0, end);
        text = text.slice(end);
        return message;
    }

    return { response, next, close: () => controller.abort() };
}
