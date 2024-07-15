// src/routes/login.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ensure User model is defined correctly

router.post('/', async (req, res) => {
    try {
        const { identifier, password } = req.body;

        // Check if the user exists by email or username
        const user = await User.findOne({
            $or: [{ email: identifier }, { username: identifier }]
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid identifier or password' });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid identifier or password' });
        }

        // Return user details excluding password
        const { user_id, username, email, role, status, invite_link, wallet_id, created_at } = user;
        res.status(200).json({ 
            message: 'Login successful', 
            user: { user_id, username, email, role, status, invite_link, wallet_id, created_at }
        });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
