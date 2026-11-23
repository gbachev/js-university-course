// Every value in process.env is a string, or undefined when the name is not set.
// Run it with two values set for this one command:
//   PORT=8080 DEBUG=false node 01-env-strings.js
console.log(process.env.PORT, typeof process.env.PORT); // 8080 string
console.log(process.env.PORT + 1); // 80801
console.log(Number(process.env.PORT) + 1); // 8081
console.log(process.env.DEBUG === false, process.env.DEBUG === 'false'); // false true
console.log(process.env.BOOKS_API_KEY); // undefined
