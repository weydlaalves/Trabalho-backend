const http = require('http');
const app = require('./config/express')();
const db = require('./config/database');


http.createServer(app).listen(app.get('port'), function(){
    console.log("Servidor express está rodando na porta " + app.get('port'));
});
db('mongodb://localhost/api');
