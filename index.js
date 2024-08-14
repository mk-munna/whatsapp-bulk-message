require('dotenv').config();

const accountSid = process.env.NODE_ENV_SSID;
const authToken = process.env.NODE_ENV_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const recipients = [
    // numbers here ('whatsapp:#####',)
];

const messageBody = 'Hello! This is a bulk message .';

recipients.forEach((recipient) => {
    client.messages
        .create({
            body: messageBody,
            from: process.env.NODE_ENV_TWILIO_NUM, // Twilio WhatsApp sandbox number
            to: recipient
        })
        .then(message => console.log(`Message sent to ${recipient}: ${message.sid}`))
        .catch(error => console.error(`Failed to send message to ${recipient}: ${error}`));
});
