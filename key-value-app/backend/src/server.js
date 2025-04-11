const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'UP'
    });
});

console.log('Connecting to MongoDB...');
// Connect to MongoDB
mongoose.connect(`mongodb://${process.env.MONGODB_HOST}/${process.env.KEY_VALUE_DB}`, {
  auth: {
    username: process.env.KEY_VALUE_USER,
    password: process.env.KEY_VALUE_PASSWORD
  },
  connectTimeoutMS: 500
})
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
    console.log('MongoDB connected');
})
.catch(err => console.error('MongoDB connection error:', err))
