const model = require('./model');

function addUser(user) {
   const myUser = new model(user);
   return myUser.save();
}

async function getUser() {
   const users = await model.find();
   return users;
}

module.exports = {
   add: addUser,
   list: getUser,
}