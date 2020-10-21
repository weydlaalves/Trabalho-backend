const controller = require("../controllers/usuario");
const auth = require('../controllers/auth');

module.exports = function(app){
    app.post("/api/usuarios/signin", auth.logar);
    app.use("/api/usuarios", auth.checarToken);
    app.post("/api/usuarios", controller.adicionarUsuario);
    app.get("/api/usuarios", controller.listarUsuario);
    app.get("/api/usuarios/:id", controller.detalheUsuario);
    app.get("/api/usuarios/:id/post", controller.obterPostdoUsuario); 
    app.put("/api/usuarios", controller.modificarUsuario);
    app.delete("/api/usuarios/", controller.deletarUsuario);
}