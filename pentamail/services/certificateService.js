const User = require('../models/userModel');
const cryptoUtils = require('../utils/cryptoUtils');

class CertificateService {
    async requestCertificate(email) {
        try {
            const { publicKey, privateKey } = await cryptoUtils.generateKeyPair();

            const newUser = new User({
                email,
                publicKey,
                privateKey,
            });

            await newUser.save();
            return { success: true, message: 'Certificate requested successfully!', publicKey };
        } catch (error) {
            console.error('Error requesting certificate:', error);
            throw new Error('Failed to request certificate.');
        }
    }

    async revokeCertificate(email) {
        try {
            const user = await User.findOneAndDelete({ email });

            if (!user) {
                throw new Error('User not found.');
            }

            return { success: true, message: 'Certificate revoked successfully.' };
        } catch (error) {
            console.error('Error revoking certificate:', error);
            throw new Error('Failed to revoke certificate.');
        }
    }
}

module.exports = new CertificateService();