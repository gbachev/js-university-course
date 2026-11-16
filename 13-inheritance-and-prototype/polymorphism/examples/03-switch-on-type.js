// A first version: one switch on the type of the channel.
function send(channel, message) {
    switch (channel.type) {
        case 'email':
            return `Email to ${channel.recipient}: ${message}`;
        case 'sms':
            return `SMS to ${channel.recipient}: ${message.slice(0, 160)}`;
        case 'push':
            return `Push to ${channel.recipient}: ${message}`;
        default:
            throw new Error(`Unknown channel: ${channel.type}`);
    }
}

const sms = { type: 'sms', recipient: '+359 888 123 456' };

console.log(send(sms, 'Your order has shipped')); // SMS to +359 888 123 456: Your order has shipped
