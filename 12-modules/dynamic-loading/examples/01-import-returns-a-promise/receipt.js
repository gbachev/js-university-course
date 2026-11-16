console.log('receipt.js runs');

export const shopName = 'Doe Books';

export default function printReceipt(total) {
    return `Total: €${total.toFixed(2)}`;
}
