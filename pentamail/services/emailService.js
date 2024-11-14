const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    async sendEmail(recipient, subject, message) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipient,
            subject: subject,
            text: message,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            return { success: true, message: 'Email sent successfully!' };
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email.');
        }
    }
}

module.exports = new EmailService();