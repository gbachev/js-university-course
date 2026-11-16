const round = (value) => Math.round(value * 10) / 10;

export function summarize(entries) {
    const totals = {};
    for (const { name, entryType, duration } of entries) {
        if (entryType !== 'measure') {
            continue;
        }
        totals[name] ??= { count: 0, total: 0 };
        totals[name].count += 1;
        totals[name].total += duration;
    }

    const summary = {};
    for (const [name, { count, total }] of Object.entries(totals)) {
        summary[name] = { count, total: round(total), average: round(total / count) };
    }
    return summary;
}
