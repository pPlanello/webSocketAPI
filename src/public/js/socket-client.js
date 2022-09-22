const socket_online = document.getElementById('socketOnline');
const socket_offline = document.getElementById('socketOffline');

const socket = io();

socket.on('connect', () => {
    console.log('Connected');

    socket_online.style.display = '';
    socket_offline.style.display = 'none';
});

socket.on('disconnect', () => {
    console.log('Disconnected');
    
    socket_online.style.display = 'none';
    socket_offline.style.display = '';
});