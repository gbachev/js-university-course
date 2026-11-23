// WebSockets in brief. Node has a WebSocket client built in, but no WebSocket server, so the
// server half of this sketch needs the ws package, which the course does not install.
// Without it the file only says so. To try it once, from 24-node-on-the-server:
//   npm install --no-save ws
//   node real-time/examples/03-websocket-sketch.js
// The next plain npm install removes ws again.
let WebSocketServer;
try {
    ({ WebSocketServer } = await import('ws'));
} catch {
    console.log('This sketch needs the ws package: npm install --no-save ws');
    process.exit(0);
}

// The server, with ws: it sends every message it gets to every open socket.
const server = new WebSocketServer({ port: 3001 });
server.on('connection', (client) => {
    client.on('message', (data) => {
        for (const other of server.clients) {
            other.send(`Someone says: ${data}`);
        }
    });
});

// The client: the same WebSocket API as in the browser.
const socket = new WebSocket('ws://localhost:3001');

socket.onopen = () => {
    socket.send('Who has read Dune?');
};

socket.onmessage = (event) => {
    console.log(event.data); // Someone says: Who has read Dune?
    socket.close();
};

socket.onclose = () => {
    console.log('Socket closed'); // Socket closed
    server.close();
};
