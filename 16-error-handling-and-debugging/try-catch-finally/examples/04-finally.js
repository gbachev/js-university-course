// finally runs after try and catch, even when both of them return.
const form = { loading: false };

function submitProfile(text) {
    form.loading = true;

    try {
        const profile = JSON.parse(text);
        return `Saved ${profile.name}`;
    } catch {
        return 'Invalid profile';
    } finally {
        form.loading = false;
    }
}

console.log(submitProfile('{"name":"Jane Doe"}')); // Saved Jane Doe
console.log(form.loading); // false
console.log(submitProfile('{name: Jane Doe}')); // Invalid profile
console.log(form.loading); // false
