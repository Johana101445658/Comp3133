const express = require('express');
const router = express.Router();
const GroupMessage = require('../models/GroupMessage');
const User = require('../models/User'); // Import the user model
const Message = require('../models/Message'); // Import the message model

// Send Group Message
router.post('/send-message', async (req, res) => {
    try {
        const message = new GroupMessage(req.body);
        await message.save();
        res.status(201).json({ message: 'Message sent' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Messages from a Room
router.get('/messages/:room', async (req, res) => {
    try {
        const messages = await GroupMessage.find({ room: req.params.room });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
