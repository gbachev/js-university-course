// Past the limit of about 5 MiB per origin, setItem() throws.
try {
    localStorage.setItem('cache', 'x'.repeat(6 * 1024 * 1024));
} catch (error) {
    console.log(error.name); // QuotaExceededError
}
