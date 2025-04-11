const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

console.log('Connecting to MongoDB...');
// Connect to MongoDB
mongoose.connect('mongodb://mongodb/key-value-db', {
  auth: {
    username: 'key-value-user',
    password: 'key-value-password',
  },
  connectTimeoutMS: 500
})
.then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
    console.log('MongoDB connected');
})
.catch(err => console.error('MongoDB connection error:', err))
