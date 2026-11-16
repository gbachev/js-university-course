// considered bad practice: importing it sends a page view
console.log('page view sent');

export function track(event) {
    console.log(`tracked: ${event}`);
}
