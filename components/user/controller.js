const store = require('./store');

function addUser(name) {
   return new Promise((resolve, reject) => {
      if (!name) {
         console.error('[User Controller] No hay nombre');
         return PRomise.reject('Datos incorrectos o vacios');
      }
      const user ={
         name:name
      }
      store.add(user);
      resolve(user);
   })
}

function getUser() {
   return new Promise((resolve, reject) => {
      resolve(store.list());
   })
}



module.exports = {
   addUser,
   getUser
}