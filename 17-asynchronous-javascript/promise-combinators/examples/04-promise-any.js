// Promise.any(): the first success wins; if all fail, we get an AggregateError.
const mirrors = [
    { host: 'eu.cdn.example.com', ms: 300, up: true },
    { host: 'us.cdn.example.com', ms: 100, up: false },
    { host: 'asia.cdn.example.com', ms: 200, up: true },
];

function ping(mirror) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mirror.up) {
                resolve(mirror.host);
            } else {
                reject(new Error(`${mirror.host} is down`));
            }
        }, mirror.ms);
    });
}

Promise.any(mirrors.map(ping))
    .then((host) => console.log(`Downloading from ${host}`));

const offline = mirrors.map((mirror) => ({ ...mirror, up: false }));

Promise.any(offline.map(ping)).catch((error) => {
    console.log(error.name);
    console.log(error.errors.length);
    console.log(error.errors[0].message);
});

// Downloading from asia.cdn.example.com (after about 200 ms)
// AggregateError (after about 300 ms)
// 3
// eu.cdn.example.com is down
