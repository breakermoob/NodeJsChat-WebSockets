//Modules
const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./network/socket');
const router = require('./network/routes')
const db = require('./db');
const cors = require('cors');
//app.use(cors);
const config = require('./config');


db(config.mongoURL);

//Server port

app.use(bodyParser.json());

//iniciamos el servidor de socket
socket.conect(server);

//Routes from network routes
router(app);

//Static file server - Express!!
app.use(config.publicRoute,express.static('public'));

//listen Server - Express!!
server.listen(config.port,()=>{
   console.log('Escuchando en:'+config.host+config.port);
});



