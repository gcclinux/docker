const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { healthRouter } = require('./routes/health');
const { keyValueRouter } = require('./routes/store');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => {
  return res.json({ 
    message: 'Welcome to the Key-Value Store API',
   });
});
app.use('/health', healthRouter);
app.use('/store', keyValueRouter);


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
