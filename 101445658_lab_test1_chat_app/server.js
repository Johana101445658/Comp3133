const express = require('express');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


mongoose.connect('mongodb+srv://101445658:scRF06QDScLGSYO1@labtest.9wasy.mongodb.net/chatalb?retryWrites=true&w=majority&appName=Labtest')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const UserSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String,
    createdOn: Date
});

const MessageSchema = new mongoose.Schema({
    from_user: String,
    room: String,
    message: String,
    date_sent: Date
});

const User = mongoose.model('User', UserSchema);
const Message = mongoose.model('Message', MessageSchema);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinRoom', ({ username, room }) => {
        socket.join(room);
        socket.emit('message', { user: 'admin', text: `${username} has joined the room ${room}` });
    });

    socket.on('sendMessage', async ({ username, room, message }) => {
        const newMessage = new Message({ from_user: username, room, message, date_sent: new Date() });
        await newMessage.save();
        io.to(room).emit('message', { user: username, text: message });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(3000, () => console.log('Server running on port 3000'));