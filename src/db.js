// db.js
const mongoose = require('mongoose');

// Replace your MongoDB URI with your actual connection string
const mongoURI = 'mongodb+srv://demoUser:User@cluster0.4qgpbhh.mongodb.net/CryptoDB';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;
