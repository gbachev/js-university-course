// ?? falls back only for null and undefined.
const settings = { volume: 0, nickname: '', showTips: false };

console.log(settings.volume ?? 50); // 0
console.log(settings.showTips ?? true); // false
console.log(settings.pageSize ?? 20); // 20
console.log(null ?? 'default'); // default
