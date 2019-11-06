const model = require('./model');

function addMessage(message) {
   const myMessage = new model(message);
   myMessage.save();
}

function getMessages(filterMessage) {
   return new Promise((resolve, reject) => {
      let filter = {}
      if (filterMessage) {
         filter = { user: filterMessage }
      }
      model.find(filter)
         //populate trae de users los objectId y los vuelca
         .populate('user')
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

async function updateText(id, message) {

   const message2Update = await model.findById(id);
   message2Update.message = message;
   const newMessage = await message2Update.save();
   return newMessage;
}
function deleteMessage(id) {
   return model.deleteOne({
      _id: id
   });
}



module.exports = {
   add: addMessage,
   list: getMessages,
   updateText: updateText,
   deleteMessage: deleteMessage,
}