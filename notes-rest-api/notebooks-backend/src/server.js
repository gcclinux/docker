const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello, from notebooks-backend!' 
    });
});

const port = process.env.PORT ;
mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('MongoDB connected');
    
    app.listen(port, () => {
        console.log('Notebooks Server is running on port', port);
        }
    );
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});