export function formatReceiptDate(date, locale, timeZone) {
    const receipt = new Intl.DateTimeFormat(locale, {
        dateStyle: 'long',
        timeStyle: 'short',
        timeZone,
    });
    return receipt.format(date);
}
