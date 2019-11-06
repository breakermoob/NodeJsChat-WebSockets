const db = require('mongoose');

//Resulve las promesas
db.Promise = global.Promise;
//Conexion a la db
async function connect(key) {
   await db.connect(key, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   },()=>{
    console.log('DataBase OnFire');
   });
}

module.exports = connect;
