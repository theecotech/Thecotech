const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL_USER = 'abubakkarinam01@gmail.com';
const EMAIL_PASS = 'jyeikqfnalrnxosb'; // this is your App Password with no spaces
// Replace with your email password

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
});

app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
