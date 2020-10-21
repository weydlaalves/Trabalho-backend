const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

module.exports.listarUsuario = function(req, res){
    let promise = Usuario.find().exec();
    promise.then(
        function(usuario){
            res.status(200).json(usuario);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.adicionarUsuario = function(req, res){
    let usuario = {
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha,10)
    }
    let promise = Usuario.create(usuario);
    promise.then(
        function(usuario){
            res.status(201).json(usuario);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}
module.exports.obterPostdoUsuario = function(req, res){
    let id = req.params.id;
    let resposta = Usuario.find({usuario: id})
                            .populate('Post')
                            .exec();
    resposta.then(
        function(usuario){
            let obterUsuario = usuario.map((mat)=>(mat.usuario));
            res.status(200).json(usuario);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.modificarUsuario = function (req,res){
    let id = req.params.id;
    let promise = Usuario.findByIdAndUpdate({usuario: id})
                                            .populate('usuario')
                                            .exec();
    promise.then(
        function(usuario){
            let modificarUsuario = usuario.map((mat)=>(mat.usuario));
            res.status(200).json(usuario);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}
module.exports.detalheUsuario = function(req, res){
    let id = req.params.id;    
    let promise = Usuario.findById(id);
    promise.then(
        function(usuario){            
            res.status(200).json(usuario);
            console.log(" A operação foi completada com sucesso")  
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.deletarUsuario = function (req,res){
    let usuario = ({id: req.params.id});
    let promise = Usuario.remove(usuario).exec();
    promise.then(
        function(){
            res.status(200).json(usuario);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}


