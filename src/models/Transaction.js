const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    transactionType: {
        type: String,
        enum: ['wallet', 'swap', 'trade'],
        required: true,
    },
    coins: {
        type: [String],
        required: true,
    },
    amounts: {
        type: [Number],
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        required: true,
    },
    addresses: {
        type: [String],
        required: true,
    },
    timestamps: {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;