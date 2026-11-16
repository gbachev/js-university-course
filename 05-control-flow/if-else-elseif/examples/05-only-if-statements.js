function printAgeStageMessage(age) {
    if (age >= 18) {
        console.log('You are an adult.');
    }

    if (age >= 12 && age < 18) {
        console.log('You are a teenager.');
    }

    if (age < 12) {
        console.log('You are a child.');
    }
}

printAgeStageMessage(20); // You are an adult.
printAgeStageMessage(16); // You are a teenager.
printAgeStageMessage(10); // You are a child.
