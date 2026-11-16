export function brighten(pixels, amount) {
    // map() on a Uint8Array returns a Uint8Array, so we keep each value in 0 to 255.
    return pixels.map(value => Math.min(255, Math.max(0, value + amount)));
}
