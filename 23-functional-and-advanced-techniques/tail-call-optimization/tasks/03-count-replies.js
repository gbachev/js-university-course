// Task 3: Replies we cannot trust
// Lecture: Tail Call Optimization (TCO)
//
// countComments(list) counts the comments of a thread and all their replies, at every
// depth: each comment is { text, replies }, and replies is an array of more comments.
// The recursive version below breaks when a thread nests 100,000 levels deep, which
// a user can send us on purpose. Rewrite it without recursion: keep the comments still
// to visit in an array, take one out, count it and add its replies, until the array is
// empty. An empty list has 0 comments, and the comments must not change.
//
// Examples:
//   countComments([{ text: 'Great book!', replies: [{ text: 'Agreed', replies: [] }] }])
//   // 2
//   countComments([])    // 0
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/tail-call-optimization

export function countComments(list) {
    let count = 0;
    for (const comment of list) {
        count = count + 1 + countComments(comment.replies);
    }
    return count;
}
