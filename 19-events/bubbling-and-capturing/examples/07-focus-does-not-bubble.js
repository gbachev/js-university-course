const body = document.body;

body.addEventListener("focus", () => console.log("focus"));
body.addEventListener("focusin", (event) => {
    console.log("focusin", event.target.id, event.bubbles);
});
body.addEventListener("focus", (event) => {
    console.log("focus, capture", event.bubbles);
}, true);

// now click into the search box on the page
// focus, capture false
// focusin search true
