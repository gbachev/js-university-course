import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';

// Our code from this folder, or the solution with npm run test:solutions.
const { cookieFrom } = await import(
    process.env.SOLUTIONS ? '../solutions/02-cookie-from.js' : './02-cookie-from.js'
);

// A real Response with these Set-Cookie headers, one per cookie.
const withCookies = (...cookies) =>
    new Response(null, {
        status: 201,
        headers: cookies.map((cookie) => ['Set-Cookie', cookie]),
    });

test('gives the name=value of a session cookie, without its attributes', () => {
    const response = withCookies(
        'sid=o7WpHdm5lNQIIORVaws4z4O6-224M0DHm8Kc4Sukdp4; Max-Age=604800; Path=/; Expires=Mon, 30 Nov 2026 17:36:16 GMT; HttpOnly; SameSite=Lax',
    );

    assert.equal(cookieFrom(response), 'sid=o7WpHdm5lNQIIORVaws4z4O6-224M0DHm8Kc4Sukdp4');
});

test('a cookie with no attributes comes back whole', () => {
    assert.equal(cookieFrom(withCookies('theme=dark')), 'theme=dark');
});

test('takes the first of several Set-Cookie headers', () => {
    const response = withCookies('theme=dark', 'sid=Kq3x-_9; Path=/');

    assert.equal(cookieFrom(response), 'theme=dark');
});

test('keeps an = inside the value', () => {
    assert.equal(cookieFrom(withCookies('data=a=b; Path=/')), 'data=a=b');
});

test('gives null when the answer sets no cookie', () => {
    assert.equal(cookieFrom(new Response('{}', { status: 200 })), null);
});

test('works on the answer of a real server', async (t) => {
    const server = createServer((req, res) => {
        res.setHeader('Set-Cookie', ['sid=abc123; Path=/; HttpOnly', 'theme=dark; Path=/']);
        res.end();
    }).listen(0);
    await new Promise((resolve) => server.once('listening', resolve));
    t.after(() => server.close());

    const response = await fetch(`http://localhost:${server.address().port}/`);

    assert.equal(cookieFrom(response), 'sid=abc123');
});
