// Needs an internet connection.
// One helper checks response.ok and throws an HttpError.
const API = 'https://jsonplaceholder.typicode.com';

class HttpError extends Error {
    constructor(response) {
        super(`Request failed with status ${response.status}`);
        this.name = 'HttpError';
        this.status = response.status;
    }
}

async function getJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new HttpError(response);
    }
    return response.json();
}

async function showUser(id) {
    try {
        const user = await getJson(`${API}/users/${id}`);
        console.log(user.name);
    } catch (error) {
        if (error instanceof HttpError && error.status === 404) {
            console.log(`User ${id} not found`);
        } else {
            throw error;
        }
    }
}

showUser(1).then(() => showUser(999));
// Leanne Graham
// User 999 not found
