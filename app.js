//app.js
const express = require('express');
const connectDB = require('./db.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./users.js'));

app.listen(process.env.PORT, () => console.log(`Server started at port ${process.env.PORT}`));
