const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello, from notebooks-backend!' 
    });
});

const port = process.env.PORT ;

app.listen(port, () => {
    console.log('Notebooks Server is running on port', port);
    }
);