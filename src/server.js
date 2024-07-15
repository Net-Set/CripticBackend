// src/server.js
const mongoose = require('mongoose');
const config = require('./config');

// Connect to MongoDB
mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    console.log('MongoDB connection successful');

    // Fetch all collections in CryptoDB (replace 'CryptoDB' with your actual database name)
    const cryptoDB = mongoose.connection.getClient().db('CryptoDB');
    const collectionNames = await cryptoDB.listCollections().toArray();

    // Iterate through each collection and fetch documents
    for (let i = 0; i < collectionNames.length; i++) {
        const collectionName = collectionNames[i].name;
        const collection = cryptoDB.collection(collectionName);

        const documents = await collection.find({}).toArray();
        console.log(`Documents in collection '${collectionName}':`);
        console.log(documents);
    }
})
.catch(err => {
    console.error('MongoDB connection error:', err);
})
.finally(() => {
    // Close the Mongoose connection on app termination
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('MongoDB connection disconnected through app termination');
            process.exit(0);
        });
    });
});
