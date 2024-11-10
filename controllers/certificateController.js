const crypto = require('crypto');
const User = require('../models/userModel');

const generateKeyPair = () => {
    return new Promise((resolve, reject) => {
        crypto.generateKeyPair('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
            }
        }, (err, publicKey, privateKey) => {
            if (err) {
                return reject(err);
            }
            resolve({ publicKey, privateKey });
        });
    });
};

exports.requestCertificate = async (req, res) => {
    const { email } = req.body;

    try {
        // Generate RSA keys
        const { publicKey, privateKey } = await generateKeyPair();

        const newUser = new User({
            email,
            publicKey,
            privateKey
        });

        await newUser.save();

        res.status(201).send('Certificate requested successfully and keys generated.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating certificate and keys.');
    }
};