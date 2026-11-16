import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { applyDefaults } = await import(
    process.env.SOLUTIONS ? '../solutions/03-fill-in-defaults.js' : './03-fill-in-defaults.js'
);

test('empty settings get every default', () => {
    assert.deepEqual(applyDefaults({}), { volume: 50, showTips: true, nickname: 'Guest' });
});

test('a volume of 0 and tips switched off are kept', () => {
    const settings = applyDefaults({ volume: 0, showTips: false });
    assert.equal(settings.volume, 0);
    assert.equal(settings.showTips, false);
});

test('an empty nickname becomes Guest', () => {
    assert.equal(applyDefaults({ nickname: '' }).nickname, 'Guest');
});

test('settings the user chose are not touched', () => {
    assert.deepEqual(applyDefaults({ volume: 30, showTips: false, nickname: 'jd' }), {
        volume: 30,
        showTips: false,
        nickname: 'jd',
    });
});

test('the settings object we pass in is the one that changes', () => {
    const settings = { volume: null };
    applyDefaults(settings);
    assert.equal(settings.volume, 50);
});
