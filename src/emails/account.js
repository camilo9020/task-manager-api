const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'camilo9020@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcolme to the app, ${name}. Let me know how you get along with the app`
  })
}

const deleteAccountEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'camilo9020@gmail.com',
    subject: 'Why did you cancel your account?',
    text: `:( Good bye. We are sad because you are leaving us. Wich is the reason to cancel your account?`
  })
}

module.exports = {
  sendWelcomeEmail,
  deleteAccountEmail
}