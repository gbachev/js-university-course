export function* take(iterable, count) {
    if (count <= 0) return;
    let taken = 0;
    for (const value of iterable) {
        yield value;
        taken++;
        // return right after the last value, before the source computes another one
        if (taken === count) return;
    }
}
