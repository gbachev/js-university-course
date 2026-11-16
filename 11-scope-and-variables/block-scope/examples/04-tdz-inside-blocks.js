{
    try {
        console.log(title); // ReferenceError (TDZ)
    } catch (error) {
        console.log(error.name + ': ' + error.message);
        // ReferenceError: Cannot access 'title' before initialization
    }
    let title = 'JS';
}

// The TDZ also applies in nested blocks.
{
    let x = 1;

    {
        console.log(x); // 1
        try {
            console.log(y); // ReferenceError (TDZ)
        } catch (error) {
            console.log(error.name + ': ' + error.message);
            // ReferenceError: Cannot access 'y' before initialization
        }
        let y = 2;
    }
}
