// Good: a default for the whole parameter, so a call with no argument does not throw.
function greet({ name = 'Guest', email = 'no email' } = {}) {
    console.log(`Hello ${name}, your email is ${email}`);
}

greet(); // Hello Guest, your email is no email

// Good: defaults for missing settings, and {} when there is no config at all.
let config; // the settings did not arrive

const { theme = 'light', layout = 'grid' } = config ?? {};

console.log(theme, layout); // light grid
