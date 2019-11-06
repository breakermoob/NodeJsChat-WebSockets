const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', function (req, res) {
   controller.getUser()
      .then((usersList) => {
         response.success(req, res, 201, usersList);
      })
      .catch((e) => {
         response.error(req, res, 500, 'Error al obtener los usuarios', e);
      });
});

router.post('/', function (req, res) {

   controller.addUser(req.body.name)
      .then((user) => {
         response.success(req, res, 201, user);
      })
      .catch(() => {
         response.error(req, res, 400, 'Hubo un error al crear el usuario', '[User Network] Error en el ' + req.method);
      });
});

module.exports = router;