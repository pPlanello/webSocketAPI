
const socketController = (socket) => {
    console.log('Client connected: ', socket.id);

    socket.on('disconnect', (reason) => {
        console.log(`Client with Id '${socket.id}' disconnected because '${reason}'`)
    });

    socket.on('client-send-message', (message) => {
        console.log('Message received from Client: ', message);
        socket.broadcast.emit('server-send-message', message);
    });

}

module.exports = {
    socketController
}