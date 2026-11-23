// Task 3: Shutting down without losing a request
// Lecture: Running the Server in Production
//
// A host stops the old version of our app with a signal such as SIGTERM. Our
// server.js then stops taking new requests, lets the open ones finish and only
// then closes the database, so SQLite can fold its -wal file back into the
// database file. Write that order as a function: shutDown(server, db), where
// server is a node:http server and db is anything with a close() method (a
// better-sqlite3 database in the app).
// - Stop accepting new connections with server.close(callback). It waits for the
//   requests in progress and closes idle keep-alive connections (Node 19 and newer).
// - Do not end the open requests: no closeAllConnections() here. A user who just
//   saved an application should get the answer.
// - Call db.close() only after the server has closed (in the callback), never
//   before: a request still in progress may need the database.
// - A keep-alive connection that is busy when close() is called stays open after
//   its answer until its keep-alive timer runs out, so a real shutdown can take a
//   few seconds. The tests send Connection: close on the slow request to stay fast.
// - Return a promise that resolves once both are closed. If server.close() calls
//   its callback with an error (the server was not running), reject with it.
//
// Example:
//   process.once('SIGTERM', async () => {
//       await shutDown(server, db);
//       console.log('closed');
//   });
//
// Run the tests: npm test -- 25-our-second-project/running-in-production

export function shutDown(server, db) {
    // Your code here
}
