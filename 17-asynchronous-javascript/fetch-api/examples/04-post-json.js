// Needs an internet connection.
// A POST with a JSON body and its Content-Type header.
const API = 'https://jsonplaceholder.typicode.com';

async function createPost(post) {
    const response = await fetch(`${API}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    });
    console.log(response.status); // 201
    return response.json();
}

createPost({ userId: 1, title: 'Order shipped', body: 'On its way' })
    .then((created) => console.log(created.id, created.title));
// 101 Order shipped
