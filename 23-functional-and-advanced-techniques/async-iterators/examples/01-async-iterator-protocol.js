// An async iterator: [Symbol.asyncIterator]() and a next() that returns a promise.
// The repository runs .js files as modules, so top-level await works here.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const inbox = {
    messages: ['Order placed', 'Order shipped', 'Order delivered'],

    [Symbol.asyncIterator]() {
        const messages = this.messages;
        let index = 0;
        return {
            async next() {
                await wait(100);
                if (index < messages.length) {
                    return { value: messages[index++], done: false };
                }
                return { value: undefined, done: true };
            },
        };
    },
};

const iterator = inbox[Symbol.asyncIterator]();
const first = iterator.next();
console.log(first instanceof Promise); // true
console.log(await first);
// { value: 'Order placed', done: false }

for await (const message of inbox) {
    console.log(message);
}
// Order placed
// Order shipped
// Order delivered
