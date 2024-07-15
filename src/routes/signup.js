// src/routes/signup.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const User = require('../models/User'); // Ensure User model is defined correctly

router.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Generate a user_id (UUID or any unique identifier)
        const user_id = uuidv4();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            user_id,
            username,
            email,
            password: hashedPassword,
            created_at: new Date(),
            role: 'member',
            status: 'active',
            invite_link: `https://yourplatform.com/invite/${user_id}`,
            wallet_id: 'generated_wallet_id'
        });

        // Save the new user to the database (CryptoCollection)
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
