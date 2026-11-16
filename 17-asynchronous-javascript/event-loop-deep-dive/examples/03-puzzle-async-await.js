// Puzzle 2: the code after an await is a microtask.
function getPercent() {
    return Promise.resolve(10);
}

async function applyDiscount() {
    console.log('Discount: start');
    const percent = await getPercent();
    console.log(`Discount: ${percent}%`);
}

setTimeout(() => console.log('Timer: refresh prices'), 0);

applyDiscount();

Promise.resolve().then(() => console.log('Then: log the visit'));

console.log('Script done');

// Discount: start
// Script done
// Discount: 10%
// Then: log the visit
// Timer: refresh prices
