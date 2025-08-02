const nodemailer = require('nodemailer');

// You should use environment variables for real projects!
const EMAIL_USER = 'abubakkarinam01@gmail.com';         // Replace with your Gmail
const EMAIL_PASS = 'jyeikqfnalrnxosb';        
    // Replace with your App Password (NOT your normal Gmail password)

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { name, email, phone, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: EMAIL_USER,
    subject: `New Contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email failed to send' }),
    };
  }
};
