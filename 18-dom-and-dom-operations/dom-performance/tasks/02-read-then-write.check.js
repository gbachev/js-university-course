import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { growRows } = await import(source('02-read-then-write.js'));
const rows = [...document.querySelectorAll('#books li')];

// We wrap the height reads (offsetHeight, clientHeight, getBoundingClientRect) and the
// style getter to record the order of the reads and the writes that growRows() makes.
// style returns a Proxy that notes every write to the height.
let steps = [];
const wrapped = [
    [HTMLElement.prototype, 'offsetHeight'],
    [Element.prototype, 'clientHeight'],
    [Element.prototype, 'getBoundingClientRect'],
    [HTMLElement.prototype, 'style'],
].map(([proto, key]) => [proto, key, Object.getOwnPropertyDescriptor(proto, key)]);

function styleProxy(declaration) {
    return new Proxy(declaration, {
        get: (target, key) => {
            const value = target[key];
            if (key === 'setProperty') {
                return (name, ...rest) => {
                    if (name === 'height') steps.push('write');
                    return value.call(target, name, ...rest);
                };
            }
            return typeof value === 'function' ? value.bind(target) : value;
        },
        set: (target, key, value) => {
            if (key === 'height' || (key === 'cssText' && /height/.test(value))) {
                steps.push('write');
            }
            target[key] = value;
            return true;
        },
    });
}

function record(fn) {
    steps = [];
    for (const [proto, key, descriptor] of wrapped) {
        if (key === 'style') {
            Object.defineProperty(proto, key, {
                ...descriptor,
                get() {
                    return styleProxy(descriptor.get.call(this));
                },
            });
        } else if (key === 'getBoundingClientRect') {
            Object.defineProperty(proto, key, {
                ...descriptor,
                value(...args) {
                    steps.push('read');
                    return descriptor.value.apply(this, args);
                },
            });
        } else {
            Object.defineProperty(proto, key, {
                ...descriptor,
                get() {
                    steps.push('read');
                    return descriptor.get.call(this);
                },
            });
        }
    }
    try {
        fn();
    } finally {
        for (const [proto, key, descriptor] of wrapped) {
            Object.defineProperty(proto, key, descriptor);
        }
    }
    return steps;
}

const before = rows.map((row) => row.offsetHeight);
let order = [];
let error;
try {
    order = record(() => growRows(rows, 4));
} catch (caught) {
    error = caught;
}

check('growRows runs without an error', () => {
    if (error) throw error;
});

check('every row is 4 pixels taller', () => {
    deepEqual(
        rows.map((row) => Math.round(row.offsetHeight)),
        before.map((value) => value + 4),
    );
});

check('every row is read once and written once', () => {
    const reads = order.filter((step) => step === 'read').length;
    const writes = order.filter((step) => step === 'write').length;
    equal(reads, rows.length, `growRows should read each row's height once, it read ${reads} times`);
    equal(
        writes,
        rows.length,
        `growRows should set each row's height once before it returns, it set ${writes}`,
    );
});

check('all the reads come before the first write', () => {
    equal(order.indexOf('write'), rows.length, `the order was ${order.join(', ')}`);
});

check('an extra of 0 keeps the heights', () => {
    const now = rows.map((row) => row.offsetHeight);
    growRows(rows, 0);
    deepEqual(rows.map((row) => row.offsetHeight), now);
});
