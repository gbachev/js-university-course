// server.close() stops new connections at once and calls back when the last open
// request has finished. The database closes inside that callback, so no request
// ever meets a closed database. Wrapping the callback in a promise lets the caller
// wait for the whole shutdown.
export function shutDown(server, db) {
    return new Promise((resolve, reject) => {
        server.close((error) => {
            if (error) {
                reject(error);
                return;
            }
            db.close();
            resolve();
        });
    });
}
