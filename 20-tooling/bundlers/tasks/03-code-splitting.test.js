import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { splitChunks } = await import(
    process.env.SOLUTIONS ? '../solutions/03-code-splitting.js' : './03-code-splitting.js'
);

test('without import() everything is in main', () => {
    const modules = {
        'main.js': { imports: ['cart.js', 'format.js'], dynamic: [] },
        'cart.js': { imports: [], dynamic: [] },
        'format.js': { imports: [], dynamic: [] },
    };
    assert.deepEqual(splitChunks(modules, 'main.js'), {
        main: ['main.js', 'cart.js', 'format.js'],
        chunks: [],
    });
});

test('a dynamic import becomes a chunk of its own', () => {
    const modules = {
        'main.js': { imports: ['cart.js'], dynamic: ['checkout.js'] },
        'cart.js': { imports: [], dynamic: [] },
        'checkout.js': { imports: ['payment.js'], dynamic: [] },
        'payment.js': { imports: [], dynamic: [] },
    };
    assert.deepEqual(splitChunks(modules, 'main.js'), {
        main: ['main.js', 'cart.js'],
        chunks: [['checkout.js', 'payment.js']],
    });
});

test('files already in main are not repeated in a chunk', () => {
    const modules = {
        'main.js': { imports: ['date-fns', 'cart.js'], dynamic: ['checkout.js'] },
        'cart.js': { imports: [], dynamic: [] },
        'checkout.js': { imports: ['cart.js', 'date-fns', 'payment.js'], dynamic: [] },
        'payment.js': { imports: [], dynamic: [] },
    };
    assert.deepEqual(splitChunks(modules, 'main.js'), {
        main: ['main.js', 'date-fns', 'cart.js'],
        chunks: [['checkout.js', 'payment.js']],
    });
});

test('dynamic imports in other main files count too, file by file', () => {
    const modules = {
        'main.js': { imports: ['menu.js'], dynamic: ['checkout.js'] },
        'menu.js': { imports: [], dynamic: ['help.js'] },
        'checkout.js': { imports: [], dynamic: [] },
        'help.js': { imports: [], dynamic: [] },
    };
    assert.deepEqual(splitChunks(modules, 'main.js'), {
        main: ['main.js', 'menu.js'],
        chunks: [['checkout.js'], ['help.js']],
    });
});

test('a dynamic import of a file main already has adds no chunk', () => {
    const modules = {
        'main.js': { imports: ['cart.js'], dynamic: ['cart.js'] },
        'cart.js': { imports: [], dynamic: [] },
    };
    assert.deepEqual(splitChunks(modules, 'main.js'), {
        main: ['main.js', 'cart.js'],
        chunks: [],
    });
});
