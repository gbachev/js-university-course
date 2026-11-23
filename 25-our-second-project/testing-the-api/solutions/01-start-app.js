import { createServer } from 'node:http';

// listen(0) asks for any free port. server.address() knows the port only once the
// server is listening, so we wait for that event (or 'error') before building the
// url. close() alone waits for every open request to finish, so we also end the
// connections still open with closeAllConnections().
export function startApp(handler) {
    return new Promise((resolve, reject) => {
        const server = createServer(handler).listen(0);

        server.once('error', reject);
        server.once('listening', () => {
            const { port } = server.address();

            resolve({
                url: `http://localhost:${port}`,
                close: () =>
                    new Promise((done) => {
                        server.close(() => done());
                        server.closeAllConnections();
                    }),
            });
        });
    });
}
