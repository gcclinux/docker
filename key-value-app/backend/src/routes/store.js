const express = require('express');
const { KeyValue } = require('../models/keyValue');

const keyValueRouter = express.Router();

keyValueRouter.post('/', async (req, res) => {
    const { key, value } = req.body;

    if (!key || !value) {
        return res.status(400).json({ message: 'Key and value are required' });
    }
    try {
        const existingKey = await KeyValue.findOne({ key });
        
        if (existingKey) {
            return res.status(400).json({ message: 'Key already exists' });
        }
        const keyValue = new KeyValue({ key, value });
        await keyValue.save();
        return res.status(201).json({ message: 'Key-value pair stored successfully' });

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error while creating key-value pair' });
    }
});

keyValueRouter.get('/:key', async (req, res) => {
    const { key } = req.params;
    try {
        const keyValue = await KeyValue.findOne({ key });

        if (!keyValue) {
            return res.status(404).json({ message: 'Key not found' });
        }

        return res.status(200).json({ key, value: keyValue.value }); // Use keyValue.value here

    } catch (error) {
        res.status(500).json({ message: 'Internal server error while getting key-value pair' });
    }
});

keyValueRouter.put('/:key', (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({nessage: 'Internal server error while updating key-value pair'});
    }
    return res.status(200).send('updating key-value pair');
});
keyValueRouter.delete('/:key', (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({nessage: 'Internal server error while deleting key-value pair'});
    }
    return res.status(200).send('deleting key-value pair');
});

module.exports = { 
    keyValueRouter,
};