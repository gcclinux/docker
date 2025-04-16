const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello, from notebooks-backend!' 
    });
});

app.listen(3000, () => {
    console.log('Notebooks Server is running on port 3000');
    }
);