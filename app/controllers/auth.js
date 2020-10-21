const Usuario = require('../models/usuario');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.logar = function(req, res) {
    function logar (user){
        if(bcrypt.compareSync(req.body.senha, user.senha)){
            let token = jwt.sign({userId : user._id}, 'senha secreta');
            res.status(200).send("Senha correta!");
        }else{
            falhar();
        }
    }function falhar(erro){
        res.status(401).send('Senha Errada ou inexistente!');
    }
    Usuario.findOne({senha:req.body.senha}).exec().then(logar).catch(falhar);
}
module.exports.checarToken = function(req, res, next){
    jwt.verify(req.query.token,'senha secreta', function(err,decoded){
        if(err){
            return res.status(401).json({
                title: 'Senha nao autenticada ou invalida!',
                error: err
            });
        }
        next();
    })
};