// Every channel class overrides send(), so the loop never asks for the type.
class Channel {
    constructor(recipient) {
        this.recipient = recipient;
    }

    send(message) {
        throw new Error(`${this.constructor.name} must implement send()`);
    }
}

class EmailChannel extends Channel {
    send(message) {
        return `Email to ${this.recipient}: ${message}`;
    }
}

class SmsChannel extends Channel {
    send(message) {
        return `SMS to ${this.recipient}: ${message.slice(0, 160)}`;
    }
}

class PushChannel extends Channel {
    send(message) {
        return `Push to ${this.recipient}: ${message}`;
    }
}

const email = new EmailChannel('john@example.com');
const sms = new SmsChannel('+359 888 123 456');
const push = new PushChannel('Jane Doe (mobile app)');

for (const channel of [email, sms, push]) {
    console.log(channel.send('Your order has shipped'));
}
// Email to john@example.com: Your order has shipped
// SMS to +359 888 123 456: Your order has shipped
// Push to Jane Doe (mobile app): Your order has shipped

class SlackChannel extends Channel {}

try {
    new SlackChannel('#orders').send('Your order has shipped');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // Error: SlackChannel must implement send()
}
