let details = null;

// better: one controller for the open panel, aborted on close
function openDetails(key) {
    details?.abort();
    details = new AbortController();
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            console.log(`close ${key}`);
            details.abort();
        }
    }, { signal: details.signal });
}

function pressEscape() {
    const escape = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(escape);
}

openDetails("dune");
openDetails("emma");
pressEscape(); // close emma
pressEscape();
