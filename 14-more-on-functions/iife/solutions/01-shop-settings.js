export function createShopSettings() {
    // Without the semicolon, the object would be called with the function as argument.
    const settings = { currency: 'EUR' };
    (function () {
        settings.language = 'en';
        settings.freeShippingFrom = 50;
    })();

    return settings;
}
