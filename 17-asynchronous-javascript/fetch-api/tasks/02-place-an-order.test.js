import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createOrder } = await import(
    process.env.SOLUTIONS ? '../solutions/02-place-an-order.js' : './02-place-an-order.js'
);

// Replaces the global fetch() with a fake server. It records every request and
// answers 201 with the order plus an id, or with the status we give it.
function fakeServer(t, status = 201) {
    const requests = [];
    t.mock.method(globalThis, 'fetch', async (url, options = {}) => {
        requests.push({ url: String(url), options });
        if (status !== 201) {
            return new Response(JSON.stringify({ error: 'Invalid order' }), { status });
        }
        const order = JSON.parse(options.body);
        return new Response(JSON.stringify({ id: 1042, ...order }), { status });
    });
    return requests;
}

const order = { items: ['book-1'], total: 25 };

test('the request is a POST to the orders URL', async (t) => {
    const requests = fakeServer(t);
    await createOrder(order);
    assert.equal(requests.length, 1);
    assert.equal(requests[0].url, 'https://shop.example/api/orders');
    assert.equal(requests[0].options.method, 'POST');
});

test('the body is the order as JSON', async (t) => {
    const requests = fakeServer(t);
    await createOrder(order);
    assert.deepEqual(JSON.parse(requests[0].options.body), order);
});

test('the Content-Type header says the body is JSON', async (t) => {
    const requests = fakeServer(t);
    await createOrder(order);
    const headers = new Headers(requests[0].options.headers);
    assert.equal(headers.get('Content-Type'), 'application/json');
});

test('a 201 answer gives the created order', async (t) => {
    fakeServer(t);
    assert.deepEqual(await createOrder(order), {
        id: 1042,
        items: ['book-1'],
        total: 25,
    });
});

test('a failed status throws with the status in the message', async (t) => {
    fakeServer(t, 422);
    await assert.rejects(createOrder(order), {
        message: 'Order not created: status 422',
    });
});
