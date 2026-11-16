function printIsAdultMessage(age) {
    if (age < 18) {
        console.log('You are an not an adult, yet.');
    } else {
        console.log('You are an adult.');
    }
}

printIsAdultMessage(20); // You are an adult.
printIsAdultMessage(16); // You are an not an adult, yet.
