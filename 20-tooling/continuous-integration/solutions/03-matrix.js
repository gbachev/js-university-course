export function checkNames(jobName, matrix) {
    // Start with one empty combination and extend it key by key.
    let combinations = [[]];
    for (const values of Object.values(matrix)) {
        const next = [];
        for (const combination of combinations) {
            for (const value of values) {
                next.push([...combination, value]);
            }
        }
        combinations = next;
    }
    if (Object.keys(matrix).length === 0) {
        return [jobName];
    }
    return combinations.map((combination) => `${jobName} (${combination.join(', ')})`);
}
