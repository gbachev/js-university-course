import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { moduleFormat } = await import(
    process.env.SOLUTIONS ? '../solutions/01-which-format.js' : './01-which-format.js'
);

const umd = `(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.prices = factory();
    }
})(this, function () {
    return { formatPrice };
});`;

test('a UMD wrapper is UMD, even though it contains module.exports', () => {
    assert.equal(moduleFormat(umd), 'UMD');
});

test('define() with an array at the start is AMD', () => {
    assert.equal(moduleFormat('define(["prices"], function (prices) {\n});'), 'AMD');
    assert.equal(moduleFormat('\n\n  define([], function () {});'), 'AMD');
});

test('require() with an array and a callback at the start is AMD', () => {
    assert.equal(moduleFormat('require(["cart"], function (cart) {\n});'), 'AMD');
});

test('module.exports, exports. and require() mean CommonJS', () => {
    assert.equal(moduleFormat('module.exports = { addVat, formatPrice };'), 'CommonJS');
    assert.equal(moduleFormat('exports.studentDiscount = 0.1;'), 'CommonJS');
    assert.equal(moduleFormat('const path = require("node:path");'), 'CommonJS');
});

test('import and export mean an ES module', () => {
    assert.equal(moduleFormat('export const VAT_RATE = 0.2;'), 'ES module');
    assert.equal(moduleFormat('import { addVat } from "./prices.js";'), 'ES module');
});

test('code with none of them is unknown', () => {
    assert.equal(moduleFormat('console.log("hi");'), 'unknown');
    assert.equal(moduleFormat(''), 'unknown');
});
