export function countVotes(votes) {
    const counts = Object.create(null);

    for (const title of votes) {
        counts[title] = (counts[title] ?? 0) + 1;
    }

    return counts;
}
