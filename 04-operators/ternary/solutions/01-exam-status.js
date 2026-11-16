export function examStatus(score, passScore) {
    return score >= passScore ? 'pass' : 'try again';
}
