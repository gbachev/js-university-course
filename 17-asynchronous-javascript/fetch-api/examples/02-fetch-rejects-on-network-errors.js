// Needs an internet connection.
// A 404 fulfills; only a request that gets no response rejects.
async function checkErrors() {
    const url = 'https://jsonplaceholder.typicode.com/users/999';
    const response = await fetch(url);
    console.log(response.ok); // false
    console.log(response.status); // 404
    console.log(await response.json()); // {}

    try {
        await fetch('https://shop.example/api/users');
    } catch (error) {
        console.log(error.name); // TypeError
    }
}

checkErrors();
