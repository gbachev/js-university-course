// When the depth is small and known, plain recursion is the clearest code.
const comments = [
    {
        text: 'Great book!',
        replies: [
            { text: 'Agreed', replies: [] },
            {
                text: 'Which chapter?',
                replies: [{ text: 'Chapter 3', replies: [] }],
            },
        ],
    },
    { text: 'Fast delivery', replies: [] },
];

function countComments(list) {
    let count = 0;
    for (const comment of list) {
        count = count + 1 + countComments(comment.replies);
    }
    return count;
}

console.log(countComments(comments)); // 5
