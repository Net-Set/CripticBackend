const express = require('express');
const db = require('./db');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(signupRouter);
app.use(loginRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
