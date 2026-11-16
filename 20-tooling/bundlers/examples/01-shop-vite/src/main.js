import './style.css';
import { format } from 'date-fns';
import { cartTotal } from './cart.js';
import { formatPrice } from './format.js';

const items = [{ price: 19.99 }, { price: 5.5 }];
const total = formatPrice(cartTotal(items));
const today = format(new Date(), 'dd.MM.yyyy');

document.querySelector('#total').textContent = total + ', ' + today;
// 25.49 EUR, 16.11.2026 (today's date)

const button = document.querySelector('#checkout');

button.addEventListener('click', async () => {
    const { openCheckout } = await import('./checkout.js');
    openCheckout(total);
    // Checkout for 25.49 EUR
});
