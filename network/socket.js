const socketIo = require('socket.io');
const socket = {}

function conect(server) {
   socket.io = socketIo(server);
}

module.exports = {
   conect,
   socket
}