export const postMethods = {
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
    // Each post gets its own array instead of the one on the prototype.
    post.tags = [];
    return post;
}
