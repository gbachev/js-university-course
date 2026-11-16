export function grade(score) {
    return score >= 90 ? 'A'
        : score >= 75 ? 'B'
        : score >= 50 ? 'C'
        : 'F';
}
