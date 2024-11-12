module.exports = {
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/pkiEmail',
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
};