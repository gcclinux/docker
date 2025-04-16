const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello, from notes-backend!' 
    });
});

app.listen(3001, () => {
    console.log('Notes Server is running on port 3001');
    }
);