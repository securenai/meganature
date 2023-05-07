const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  const { name, phone, email, message } = req.body
  console.log(process.env.NEXT_PUBLIC_EMAIL, process.env.NEXT_PUBLIC_EMAIL_PASSWORD)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: 'New Contact Form Submission',
    html: `
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Message:</p>
      <p>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).send('Email sent successfully')
  } catch (error) {
    res.status(500).send('Error sending email: ' + error.message)
  }
}
