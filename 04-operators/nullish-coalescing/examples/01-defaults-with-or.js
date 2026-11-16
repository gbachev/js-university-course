// The problem with || for defaults: 0, '' and false are replaced too.
const settings = { volume: 0, nickname: '', showTips: false };

const volume = settings.volume || 50;
const nickname = settings.nickname || 'Guest';
const showTips = settings.showTips || true;

console.log(volume); // 50
console.log(nickname); // Guest
console.log(showTips); // true
