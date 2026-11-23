export function likeHandler(post) {
    return post.like.bind(post);
}
