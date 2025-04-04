const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    address: {
        street: String,
        suite: String,
        city: {
            type: String,
            match: /^[A-Za-z\s]+$/
        },
        zipcode: {
            type: String,
            match: /^\d{5}-\d{4}$/
        },
        geo: {
            lat: String,
            lng: String
        }
    },
    phone: {
        type: String,
        match: /^\d-\d{3}-\d{3}-\d{4}$/
    },
    website: {
        type: String,
        match: /^(http|https):\/\/[^ "]+$/
    },
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;