const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: String,
    username: String,
    email: String,
    password: String,
    created_at: { type: Date, default: Date.now },
    role: String,
    status: String,
    invite_link: String,
    wallet_id: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
