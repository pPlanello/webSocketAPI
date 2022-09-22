const socketOnline = document.getElementById('socketOnline');
const socketOffline = document.getElementById('socketOffline');
const buttonSend = document.getElementById('buttonSend');
const txtMessage = document.getElementById('txtMessage');

const socket = io();

socket.on('connect', (socket) => {
    console.log('Connected');

    socketOnline.style.display = '';
    socketOffline.style.display = 'none';
});

socket.on('disconnect', () => {
    console.log('Disconnected');

    socketOnline.style.display = 'none';
    socketOffline.style.display = '';
});

socket.on('server-send-message', (message) => {
    console.log('Message received from Server: ', message);
});

buttonSend.addEventListener('click', () => {
    const message = txtMessage.value;

    const payload = {
        message,
        id: 1237896,
        date: new Date()
    }
    socket.emit('client-send-message', payload);
});