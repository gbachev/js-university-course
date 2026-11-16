export function leftoverItems(items, boxSize) {
    return items % boxSize;
}

export function fullBoxes(items, boxSize) {
    // Without the leftover items, the rest divides into whole boxes.
    return (items - (items % boxSize)) / boxSize;
}
