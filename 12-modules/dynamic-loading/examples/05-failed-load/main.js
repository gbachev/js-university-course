// Run with: node 12-modules/dynamic-loading/examples/05-failed-load/main.js
// There is no coupons.js next to this file, so the promise is rejected.
import('./coupons.js')
    .then((coupons) => {
        console.log(coupons.welcomeCode);
    })
    .catch((error) => {
        console.log(error.code);
        console.log('Coupons are not available');
    });

// ERR_MODULE_NOT_FOUND
// Coupons are not available
