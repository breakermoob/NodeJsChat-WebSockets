const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload =multer({
   dest:'public/files/',
});

//CRUD
router.get('/', function (req, res) {
   const filterMessages = req.query.user || null;
   controller.getMessage(filterMessages)
      .then((messageList) => {
         response.success(req, res, 201, messageList);
      })
      .catch((e) => {
         response.error(req, res, 500, 'Error al obtener los mensajes', e);
      });
});

router.post('/', upload.single('file') ,function (req, res) {
   controller.addMessage(req.body.chat ,req.body.user, req.body.message,req.file)
      .then((fullMessage) => {
         response.success(req, res, 201, fullMessage);
      })
      .catch((e) => {
         response.error(req, res, 400, 'Hubo un error al enviar el mensaje', e);
      });
});

router.patch('/:id', function (req, res) {

   controller.updateMessage(req.params.id)
      .then((data) => {
         response.success(req, res, 201, data);
      })
      .catch(() => {
         response.error(req, res, 500, 'Hubo un error al actualizar el mensaje', '[Message Network] Error en el ' + req.method);
      });
});

router.delete('/:id', function (req, res) {
   controller.deleteMessage(req.params.id)
   .then((data) => {
      response.success(req, res, 201, data);
   })
   .catch(() => {
      response.error(req, res, 500, 'Hubo un error al eliminar el mensaje', '[Message Network] Error en el ' + req.method);
   });
});

module.exports = router;