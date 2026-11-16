// Object spread: the properties spread later overwrite the earlier ones.
const defaultConfig = { theme: 'light', showSidebar: true };
const userConfig = { theme: 'dark' };

const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig); // { theme: 'dark', showSidebar: true }
