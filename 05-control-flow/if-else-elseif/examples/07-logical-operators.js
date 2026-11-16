function printWorkEligibilityMessage(age) {
    const minorsWorkEligibleAge = 14;
    const workEligibleAge = 18;
    const retirementAge = 65;

    if (age < minorsWorkEligibleAge || age > retirementAge) {
        console.log(
            'You are too young or already retired, working might not be legal in some countries.'
        );
    } else if (age >= minorsWorkEligibleAge && age < workEligibleAge) {
        console.log('You are a minor, but you can work part-time in most countries.');
    } else if (age >= workEligibleAge && age <= retirementAge) {
        console.log('You can work full-time.');
    } else {
        // should never reach this point, in fact we can remove the else
    }
}

// You are too young or already retired, working might not be legal in some countries.
printWorkEligibilityMessage(68);
printWorkEligibilityMessage(40); // You can work full-time.
printWorkEligibilityMessage(16); // You are a minor, but you can work part-time in most countries.
// You are too young or already retired, working might not be legal in some countries.
printWorkEligibilityMessage(10);
