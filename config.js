const config ={
   mongoURL: process.env.DB_URL || 'mongodb+srv://db_user:{p455_Only4Me:D}@cluster0-ceujf.mongodb.net/db_message',
   port: parseInt(process.env.PORT, 10) || 3000,
   host:process.env.HOST || 'http://localhost:',
   publicRoute:process.env.PUBLIC_ROUTE || '/app',
};

module.exports = config;
