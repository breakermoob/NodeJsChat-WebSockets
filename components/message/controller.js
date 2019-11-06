const store = require('./store');
const socket =  require('../../network/socket').socket;

function addMessage(chat,user, message,file) {
   return new Promise((resolve, reject) => {
      if (!user || !message) {
         console.error('[Message Controller] No hay usuario o mensaje');
         reject('Datos incorrectos o vacios');
         return false;
      }

      let fileUrl='';

      if (file) {
         fileUrl='http://localhost:3000/app/files/'+file.filename;
      }

      const fullMessage = {
         chat:chat,
         user: user,
         message: message,
         date: new Date(),
         file:fileUrl
      }
      store.add(fullMessage);
      socket.io.emit('message',fullMessage);
      resolve(fullMessage);
   })
}

function getMessage(filterMessages) {
   return new Promise((resolve, reject) => {
      resolve(store.list(filterMessages));
   })
}

function updateMessage(id, message) {
   return new Promise(async (resolve, reject) => {
      if (!id || !message) {
         reject('Información invalida');
         return false;
      }
      const result = await store.updateText(id, message);
      resolve(result);
   })
}
function deleteMessage(id) {
   return new Promise(async (resolve, reject) => {
      if (!id) {
         reject('Información invalida');
         return false;
      }
      const result = await store.deleteMessage(id);
      resolve(result);
   })
}


module.exports = {
   addMessage,
   getMessage,
   updateMessage,
   deleteMessage
}