const db = require('mongoose');
//mongodb+srv://db_user:EkIK16LEiF1goDVF@cluster0-ceujf.mongodb.net/test

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