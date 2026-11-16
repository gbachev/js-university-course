function demo() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
    }

    console.log(a); // 1

    try {
        console.log(b); // ReferenceError
    } catch (error) {
        console.log(error.name + ': ' + error.message);
        // ReferenceError: b is not defined
    }

    try {
        console.log(c); // ReferenceError
    } catch (error) {
        console.log(error.name + ': ' + error.message);
        // ReferenceError: c is not defined
    }
}

demo();
