const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    role: String,
    // Add more fields as needed
    // For example, profile picture, date of birth, etc.
});

module.exports = mongoose.model('User', UserSchema);