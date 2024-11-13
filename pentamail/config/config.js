const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mongoURI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pkiEmail',

    // Email service configuration
    emailUser: process.env.EMAIL_USER || 'your-email@gmail.com', 
    emailPass: process.env.EMAIL_PASS || 'your-email-password', 

    // Server configuration
    serverPort: process.env.PORT || 5001, 

    caKeyPath: process.env.CA_KEY_PATH || './ca.key', // Path to CA private key
    caCertPath: process.env.CA_CERT_PATH || './ca.crt', // Path to CA certificate

};