// const Transaction = require('../models/Transaction');
// const User = require('../models/User');

// exports.createTransaction = async (req, res) => {
//     const { userId, type, matrix, level, amount, transactionHash } = req.body;
    
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(400).send('User not found');
//         }

//         const newTransaction = new Transaction({ user: user._id, type, matrix, level, amount, transactionHash });
//         await newTransaction.save();

//         res.status(201).send(newTransaction);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };
