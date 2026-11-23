// Run with: node 20-tooling/node-and-nvm/examples/08-require-async-module/load.cjs
// require() is synchronous, so it cannot wait for settings.mjs's top-level await.
try {
    require('./settings.mjs');
} catch (error) {
    console.log(error.code); // ERR_REQUIRE_ASYNC_MODULE
}

// import() returns a promise, so it can wait.
import('./settings.mjs').then((settingsModule) => {
    console.log(settingsModule.default.currency); // EUR
});
