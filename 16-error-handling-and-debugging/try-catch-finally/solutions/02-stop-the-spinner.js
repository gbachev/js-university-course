export function saveAddress(form, text) {
    form.saving = true;

    try {
        const address = JSON.parse(text);
        return `Saved ${address.city}`;
    } catch {
        return 'Invalid address';
    } finally {
        form.saving = false;
    }
}
