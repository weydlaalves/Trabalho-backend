const controller = require("../controllers/post");

module.exports = function(app){

    app.get('/api/post', controller.listarPost);
    app.get('/api/post/:id', controller.detalhePost);
    app.post('/api/post', controller.adicionarPost);
    app.put('/api/post', controller.modificarPost);
    app.delete('/api/post', controller.deletarPost);
    app.get('/api/post/:id/post', controller.obterPost);
}