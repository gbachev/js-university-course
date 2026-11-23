// An ES module with top-level await: it finishes loading only when the promise settles.
const settings = await Promise.resolve({ currency: 'EUR', vatRate: 0.2 });

export default settings;
