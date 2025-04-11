const express = require('express');

const keyValueRouter = express.Router();

keyValueRouter.post('/', (req, res) => {
    return res.status(200).send('creating key-value pair');
});
keyValueRouter.get('/:key', (req, res) => {
    return res.status(200).send('getting key-value pair');
});
keyValueRouter.put('/:key', (req, res) => {
    return res.status(200).send('updating key-value pair');
});
keyValueRouter.delete('/:key', (req, res) => {
    return res.status(200).send('deleting key-value pair');
});

module.exports = { 
    keyValueRouter,
};