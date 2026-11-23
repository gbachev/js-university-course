// Task 2: Keep this
// Lecture: Core JavaScript Questions
//
// A post has a like() method that adds one to this.likes and returns the new count.
// The like button does not call post.like() itself: it gets a handler and calls it as
// a plain function, handler(). likeHandler(post) returns that handler, but right now it
// returns the bare method, so this is lost and the call throws a TypeError. Fix it so
// the handler always likes the post we passed in, however it is called.
//
// Examples:
//   const post = { title: 'Closures in 5 minutes', likes: 0, like() { ... } };
//   const handler = likeHandler(post);
//   handler()     // 1
//   handler()     // 2
//   post.likes    // 2
//
// Run the tests: npm test -- 26-how-to-prepare-for-an-interview/core-questions

export function likeHandler(post) {
    return post.like;
}
