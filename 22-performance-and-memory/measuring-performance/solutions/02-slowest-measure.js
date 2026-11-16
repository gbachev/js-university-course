export function slowestMeasure(entries) {
    let slowest = null;
    for (const entry of entries) {
        if (entry.entryType === 'measure' && (!slowest || entry.duration > slowest.duration)) {
            slowest = entry;
        }
    }
    return slowest ? slowest.name : null;
}
