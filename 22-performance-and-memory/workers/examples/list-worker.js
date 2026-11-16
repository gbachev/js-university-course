// list-worker.js: one shared worker holds one reading list for every open tab.
const ports = [];
const titles = [];

self.onconnect = (event) => {
    const port = event.ports[0];
    ports.push(port);

    port.addEventListener('message', (message) => {
        titles.push(message.data);
        for (const tab of ports) {
            tab.postMessage(titles);
        }
    });
    port.start();
};
