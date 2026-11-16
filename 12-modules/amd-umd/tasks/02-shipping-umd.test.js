import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

// Our code from this folder, or the solution with npm run test:solutions.
// The default import of a CommonJS file is its module.exports.
const file = process.env.SOLUTIONS
    ? '../solutions/02-shipping-umd.cjs'
    : './02-shipping-umd.cjs';
const { default: shipping } = await import(file);

// The same file run as a plain script, the way a script tag or an AMD loader runs it.
const source = readFileSync(new URL(file, import.meta.url), 'utf8');

test('in Node, require() gets the two functions', () => {
    assert.equal(typeof shipping.shippingCost, 'function');
    assert.equal(typeof shipping.freeShippingLeft, 'function');
});

test('shipping costs 4.99 below 50 and nothing from 50 on', () => {
    assert.equal(shipping.shippingCost(20), 4.99);
    assert.equal(shipping.shippingCost(49.99), 4.99);
    assert.equal(shipping.shippingCost(50), 0);
    assert.equal(shipping.shippingCost(120), 0);
});

test('freeShippingLeft tells how much more to spend, never less than 0', () => {
    assert.equal(shipping.freeShippingLeft(30), 20);
    assert.equal(shipping.freeShippingLeft(0), 50);
    assert.equal(shipping.freeShippingLeft(50), 0);
    assert.equal(shipping.freeShippingLeft(80), 0);
});

test('an AMD loader gets the same functions from define()', () => {
    let amdModule;
    const define = (dependencies, factory) => {
        amdModule = factory();
    };
    define.amd = {};
    vm.runInNewContext(source, { define });
    assert.equal(typeof amdModule.shippingCost, 'function');
    assert.equal(amdModule.freeShippingLeft(30), 20);
});

test('a plain script tag gets a global named shipping', () => {
    const page = {};
    vm.runInNewContext(source, page);
    assert.equal(typeof page.shipping.shippingCost, 'function');
    assert.equal(page.shipping.shippingCost(50), 0);
});
