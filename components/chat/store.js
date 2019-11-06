const model = require('./model');

function addChat(chat) {
   const myChat = new model(chat);
   return myChat.save();
}

function getChat(userId) {
   return new Promise((resolve, reject) => {
      let filter = {}
      if (userId) {
         filter = { users: userId }
      }
      model.find(filter)
         //populate trae de users los objectId y los vuelca
         .populate('users')
         //populete no se ejecuta solo, asi que se hace un exec
         .exec((error, populated) => {
            if (error) {
               reject(error);
               return false;
            }
            resolve(populated);
         });
   })
}


module.exports = {
   add: addChat,
   list: getChat,
}