// The spread syntax makes a shallow copy too.
// Each lesson snippet sits in its own { } block, so both can keep their names.
{
    let original = { name: 'John Doe', age: 30 };
    let copy = { ...original };

    copy.name = 'Jane Doe';
    console.log(original.name); // John Doe
}

// Nested objects are still shared.
{
    let original = { profile: { city: 'New York' } };
    let copy = { ...original };

    copy.profile.city = 'London';
    console.log(original.profile.city); // London
}
