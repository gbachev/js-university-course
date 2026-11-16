// Task 1: The shop settings
// Lecture: IIFE (Immediately Invoked Function Expressions)
//
// createShopSettings() builds the settings of our shop: it starts from the currency,
// then an IIFE adds the default language and the free shipping limit. Calling it
// throws a TypeError right now, although each line looks fine on its own. Find out
// why JavaScript reads the two statements as one and fix it, so the function returns
// all three settings. Keep the IIFE.
//
// Examples:
//   createShopSettings()
//   // { currency: 'EUR', language: 'en', freeShippingFrom: 50 }
//
// Run the tests: npm test -- 14-more-on-functions/iife

export function createShopSettings() {
    const settings = { currency: 'EUR' }
    (function () {
        settings.language = 'en';
        settings.freeShippingFrom = 50;
    })();

    return settings;
}
