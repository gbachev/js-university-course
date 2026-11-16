const visited = ['/home', '/books', '/cart', '/checkout'];

console.log(visited[visited.length - 1]); // /checkout
console.log(visited.at(-1)); // /checkout
console.log(visited.at(-2)); // /cart
console.log(visited.at(0)); // /home
console.log(visited.at(4)); // undefined
console.log(visited[-1]); // undefined
