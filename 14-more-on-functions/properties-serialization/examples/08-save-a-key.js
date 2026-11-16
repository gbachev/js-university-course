// We save the key that picks a function, never the function itself.
const discounts = {
    none: (price) => price,
    tenPercent: (price) => price * 0.9,
    blackFriday: (price) => price * 0.5
};

const saved = JSON.stringify({ discount: 'tenPercent' });
const settings = JSON.parse(saved);

const apply = discounts[settings.discount];
console.log(apply(80)); // 72
