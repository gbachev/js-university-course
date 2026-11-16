export function addPriceTag(host, price) {
    const shadow = host.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
        <style>
            .price { font-weight: bold; }
        </style>
        <p class="price"></p>
    `;
    shadow.querySelector('.price').textContent = `${price.toFixed(2)} EUR`;
}
