const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { userAddress, referrerAddress } = req.body;
    
    try {
        const referrer = await User.findOne({ address: referrerAddress });
        if (!referrer) {
            return res.status(400).send('Referrer not found');
        }
        
        const newUser = new User({ address: userAddress, referrer: referrerAddress });
        await newUser.save();

        referrer.partnersCount += 1;
        await referrer.save();

        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
