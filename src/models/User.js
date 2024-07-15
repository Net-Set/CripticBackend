const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    referrer: {
        type: String,
        required: true
    },
    partnersCount: {
        type: Number,
        default: 0
    },
    activeX3Levels: {
        type: Map,
        of: Boolean,
        default: {}
    },
    activeX4Levels: {
        type: Map,
        of: Boolean,
        default: {}
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
