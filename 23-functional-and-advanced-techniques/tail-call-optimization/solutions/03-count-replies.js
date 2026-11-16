export function countComments(list) {
    const toVisit = [...list];
    let count = 0;
    while (toVisit.length > 0) {
        const comment = toVisit.pop();
        count++;
        toVisit.push(...comment.replies);
    }
    return count;
}
