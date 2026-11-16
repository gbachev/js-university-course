// Run with: node 20-tooling/node-and-nvm/examples/04-missing-extension/app.js
// The lecture writes import { addVat } from './prices'; at the top of the file.
// Such an import fails before the first line runs, so here we load the module with
// import() inside a try, to print the error and carry on.
try {
    await import('./prices');
} catch (error) {
    console.log(error.code); // ERR_MODULE_NOT_FOUND
}

// With the extension it works.
const { addVat } = await import('./prices.js');
console.log(addVat(28)); // 33.6
