// better: nothing runs until we call it
export function sendPageView() {
    console.log('page view sent');
}

export function track(event) {
    console.log(`tracked: ${event}`);
}
