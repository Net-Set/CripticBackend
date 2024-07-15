const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['registration', 'levelPurchase', 'payout'],
        required: true
    },
    matrix: {
        type: String,
        enum: ['x3', 'x4'],
        required: false
    },
    level: {
        type: Number,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    transactionHash: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);
