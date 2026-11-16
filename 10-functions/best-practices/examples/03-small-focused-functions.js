// Small stand-ins for a real database and email service, so the example runs.
const database = {
    save(user) {
        console.log(`Saved user ${user.username}`);
    }
};

const emailService = {
    send({ to, subject }) {
        console.log(`Email to ${to}: ${subject}`);
    }
};

// Each function does one thing.
function validateUserInput({ username, email, password }) {
    if (!username || !email || !password) {
        throw new Error('Missing fields');
    }
}

function createUser({ username, email }) {
    return { id: Date.now(), username, email };
}

function sendWelcomeEmail(user) {
    emailService.send({
        to: user.email,
        subject: 'Welcome!',
        body: `Hi ${user.username}, thanks for registering.`
    });
}

function handleUserRegistration(formData) {
    validateUserInput(formData);

    const user = createUser(formData);
    database.save(user);

    sendWelcomeEmail(user);
}

handleUserRegistration({ username: 'anna', email: 'anna@example.com', password: 'secret' });
// Saved user anna
// Email to anna@example.com: Welcome!

try {
    handleUserRegistration({ username: 'kai' });
} catch (error) {
    console.log(error.name + ': ' + error.message); // Error: Missing fields
}
