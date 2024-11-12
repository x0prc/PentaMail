const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    publicKey: { type: String },
    privateKey: { type: String },
});

module.exports = mongoose.model('User', userSchema);