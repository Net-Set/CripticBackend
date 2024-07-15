// src/server.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const app = express();

// Body Parser Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Server is running and MongoDB is connected!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
