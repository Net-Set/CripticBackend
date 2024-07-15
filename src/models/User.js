// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true, // Ensure user_id is required
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        default: 'member', // Example default role
    },
    status: {
        type: String,
        default: 'active', // Example default status
    },
    invite_link: {
        type: String,
    },
    wallet_id: {
        type: String,
    },
});

module.exports = mongoose.model('User', userSchema);
