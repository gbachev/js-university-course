// Needs an internet connection.
// Two awaits: one for the Response, one for the body.
async function showUser() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    const response = await fetch(url);
    console.log(response.status); // 200
    console.log(response.ok); // true

    const user = await response.json();
    console.log(user.name); // Leanne Graham
    console.log(user.address.city); // Gwenborough
}

showUser();
