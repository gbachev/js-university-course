export function coveragePercent(covered, total) {
    if (total === 0) {
        return 100;
    }
    // Math.floor cuts the third decimal off instead of rounding it.
    return Math.floor((covered * 10000) / total) / 100;
}
