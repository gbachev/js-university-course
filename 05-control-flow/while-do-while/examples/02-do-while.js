let count = 0;

do {
    console.log(count); // Outputs: 0 (executes at least once even if the condition is false)
    count++;
} while (count < 0);
