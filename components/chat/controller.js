const store = require('./store');

function addChat(users) {
   if (!users || !Array.isArray(users)) {
      console.error('[Chat Controller] No hay usuarios');
      return Promise.reject('Datos incorrectos o vacios');
   }
   const chat = {
      users: users,
   };
   return Promise.resolve(store.add(chat));

}

function getChat(userId) {
   return Promise.resolve(store.list(userId));
}


module.exports = {
   addChat,
   getChat,
}