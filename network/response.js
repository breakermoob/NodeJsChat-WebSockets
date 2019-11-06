const statusCodes = {
   '200':'Done',
   '201':'Created',
   '400':'Invalid Format',
   '500':'Internal Error'
}


exports.success = function (req, res,status,message) {
   let statusCode = status;
   let statusMessage = message;
   if (!status) {
      status = 200;
   }
   if (!message) {
      statusMessage = statusCodes[status];
   }
   res.status(status || statusCode).send(
      {
         method:req.method,
         message: statusMessage,
         status:statusCode
       }
   );
}

exports.error = function (req, res,status,message,details) {
   console.log(details);
   res.status(status || 500).send(
      {
         method:req.method,
         message: message,
         status:status
       }
   );
}