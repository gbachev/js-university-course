// A missing nested value needs no try: optional chaining and ?? give us the default.
const settings = JSON.parse('{"theme":"dark"}');

console.log(settings.user?.preferences?.fontSize ?? 16); // 16
