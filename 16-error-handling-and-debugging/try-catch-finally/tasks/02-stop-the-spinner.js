// Task 2: Stop the spinner
// Lecture: try, catch and finally
//
// saveAddress(form, text) shows a spinner while it reads an address sent as JSON text:
// it sets form.saving to true, and when the work is done form.saving must be false
// again. It returns 'Saved <city>' for valid JSON and 'Invalid address' for broken
// JSON. Users report a spinner that never stops after a broken address. Fix it so the
// spinner stops on every path, with the reset written only once.
//
// Examples:
//   saveAddress(form, '{"city":"Sofia"}')   // 'Saved Sofia', form.saving is false
//   saveAddress(form, '{city: Sofia}')      // 'Invalid address', form.saving is false
//
// Run the tests: npm test -- 16-error-handling-and-debugging/try-catch-finally

export function saveAddress(form, text) {
    form.saving = true;

    try {
        const address = JSON.parse(text);
        form.saving = false;
        return `Saved ${address.city}`;
    } catch {
        return 'Invalid address';
    }
}
