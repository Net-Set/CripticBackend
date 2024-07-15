// src/models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    role: { type: String, default: 'member' },
    status: { type: String, default: 'active' },
    invite_link: { type: String, required: true },
    wallet_id: { type: String, required: true }
});

const User = mongoose.model('User', userSchema, 'CryptoUsers');
module.exports = User;
