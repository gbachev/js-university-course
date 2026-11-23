// Starts an app for a test, on a free port, and gives back its address and a way to stop it.
//
//   import { start } from '../../lib/start.js';
//   const server = await start(createApp());
//   after(() => server.close());
//   const response = await fetch(`${server.url}/books`);
//
// It takes an Express app or a server from http.createServer(): both have listen().
// Port 0 asks the system for any free port, so tests never fight over port 3000.
export function start(app) {
    return new Promise((resolve, reject) => {
        const server = app.listen(0);

        server.once('error', reject);
        server.once('listening', () => {
            const { port } = server.address();

            resolve({
                url: `http://localhost:${port}`,
                close: () => new Promise((done) => server.close(done)),
            });
        });
    });
}
