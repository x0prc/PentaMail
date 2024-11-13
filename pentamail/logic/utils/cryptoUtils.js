const crypto = require('crypto');
const fs = require('fs');

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

// Function to encrypt data using a public key
const encryptData = (data, publicKey) => {
    const bufferData = Buffer.from(data, 'utf-8');
    const encryptedData = crypto.publicEncrypt(publicKey, bufferData);
    return encryptedData.toString('base64'); // Return as base64 string for easy transmission
};

// Function to decrypt data using a private key
const decryptData = (encryptedData, privateKey) => {
    const bufferEncryptedData = Buffer.from(encryptedData