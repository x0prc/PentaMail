const nodemailer = require('nodemailer');
const User = require('../models/userModel');

exports.sendEmail = async (req, res) => {
    const { recipient, subject, message } = req.body;

    const user = await User.findOne({ email: recipient });
    if (!user) {
        return res.status(404).send('Recipient not found');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipient,
        subject,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send('Email sent: ' + info.response);
    });
};