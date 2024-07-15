require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    mongodbUri: process.env.MONGODB_URI,
    infuraProjectId: process.env.INFURA_PROJECT_ID
};
