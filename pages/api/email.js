const sgMail = require('@sendgrid/mail');

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.sendgridAPIKey)
  const msg = {
    to: 'ramvandermeer@gmail.com', // Change to your recipient
    from: 'ramvandermeer@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}
