// A module script is deferred: it runs after the HTML is parsed,
// so it can read the h1 even though the page loads it in the head.
console.log(document.querySelector('h1').textContent); // Shop
