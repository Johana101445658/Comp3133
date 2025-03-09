const socket = io();
const room = 'general'; 

socket.emit('joinRoom', { username: 'user', room });

document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    socket.emit('sendMessage', { username: 'user', room, message });
});

socket.on('message', function(data) {
    const chat = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${data.user}: ${data.text}`;
    chat.appendChild(messageElement);
});