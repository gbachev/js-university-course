// Task 2: Fix the shared tags
// Lecture: Object.create()
//
// Our blog creates posts with createPost(title). Since the code below went live, a tag
// we add to one post shows up on every post. Fix it, so every post gets its own tags
// array, while the methods stay shared on postMethods. A post keeps title and tags as
// its own properties, and postMethods holds only the methods.
//
// Examples:
//   const first = createPost('Hello');
//   const second = createPost('Classes');
//   first.tag('news');
//   second.tags                 // []
//   first.hasTag('news')        // true
//
// Run the tests: npm test -- 13-inheritance-and-prototype/object-create

export const postMethods = {
    tags: [],
    tag(name) {
        this.tags.push(name);
        return this;
    },
    hasTag(name) {
        return this.tags.includes(name);
    }
};

export function createPost(title) {
    const post = Object.create(postMethods);
    post.title = title;
    return post;
}
