export function showPrices(prices, list) {
    const texts = prices.map((price) => `€${price.toFixed(2)}`);
    list.append(...texts.map((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
    }));
    return texts;
}
