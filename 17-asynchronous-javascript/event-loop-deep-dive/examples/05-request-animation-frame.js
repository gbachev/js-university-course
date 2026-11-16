const label = document.createElement('p');
document.body.append(label);

label.textContent = 'Saving...';

requestAnimationFrame(() => {
    console.log(`Frame: ${label.textContent}`);
});

Promise.resolve().then(() => {
    label.textContent = 'Saved';
    console.log('Microtask: Saved');
});

console.log('Script done');

// Script done
// Microtask: Saved
// Frame: Saved
