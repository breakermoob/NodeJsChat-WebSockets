const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//CRUD
router.get('/:userId', function (req, res) {
   controller.getChat(req.params.userId)
      .then((data) => {
         response.success(req, res, 201, data);
      })
      .catch((e) => {
         response.error(req, res, 500, 'Error al obtener los mensajes', e);
      });
});

router.post('/', function (req, res) {
   controller.addChat(req.body.users)
      .then((data) => {
         response.success(req, res, 201, data);
      })
      .catch((e) => {
         response.error(req, res, 500, 'Error al obtener los mensajes', e);
      });
});

module.exports = router;