const userTheme = undefined;
const companyTheme = null;

const theme = userTheme ?? companyTheme ?? 'light';

console.log(theme); // light
console.log(userTheme ?? companyTheme); // null
