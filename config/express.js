const express = require('express');
const postRoute = require('../app/routes/post');
const usuarioRoute = require('../app/routes/usuario');
const bodyParser = require('body-parser');


module.exports = function() {
    let app = express();    
    app.set('port', 3000);
    app.use(express.static('./public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    postRoute(app);
    usuarioRoute(app);
  
    return app;
};