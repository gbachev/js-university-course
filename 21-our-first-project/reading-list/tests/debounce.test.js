import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { debounce } from '../src/debounce.js';

// Fake timers let the test move the clock forward without really waiting.
beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('debounce', () => {
    it('waits for the delay before calling', () => {
        const fn = vi.fn();
        const debounced = debounce(fn, 300);

        debounced('d');
        vi.advanceTimersByTime(299);
        expect(fn).not.toHaveBeenCalled();

        vi.advanceTimersByTime(1);
        expect(fn).toHaveBeenCalledWith('d');
    });

    it('calls once, with the last arguments, after a burst of calls', () => {
        const fn = vi.fn();
        const debounced = debounce(fn, 300);

        debounced('d');
        debounced('du');
        debounced('dun');
        vi.advanceTimersByTime(300);

        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenCalledWith('dun');
    });
});
