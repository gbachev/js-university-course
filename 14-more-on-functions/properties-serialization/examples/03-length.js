// length counts the declared parameters up to the first default, without the rest.
function createUser(name, email) {}
function createOrder(items, currency = 'EUR', note) {}
function logAll(level, ...messages) {}
function saveSettings({ theme, language }, [first, last]) {}

console.log(createUser.length); // 2
console.log(createOrder.length); // 1
console.log(logAll.length); // 1
console.log(saveSettings.length); // 2
