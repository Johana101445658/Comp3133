// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.mongodb.net/comp3133_<StudentID>_assignment1?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});