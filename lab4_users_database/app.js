const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8081;


app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.z48en.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB Atlas', err);
    });


const User = require('./models/User');


app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});