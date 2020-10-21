const Post = require('../models/post');

module.exports.adicionarPost = function(req, res){
    let post = req.body;
    let promise = Post.create(post);
    promise.then(
        function(post){
            res.status(200).json(post);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}
module.exports.listarPost = function(req, res){
    let promise = Post.find().exec();
    promise.then(
        function(post){
            res.status(200).json(post);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}
module.exports.obterPost = function(req, res){
    let id = req.params.id;
    let resposta = Post.find({usuario: id})
                            .populate('post')
                            .exec();
    resposta.then(
        function(post){
            let obterPost = usuario.map((mat)=>(mat.post));
            res.status(200).json(post);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.modificarPost = function (req,res){
    let id = req.params.id;
    let mod = res.params.mod;
    let resposta = Post.findByIdAndUpdate({usuario: id,mod})
                                            .populate('usuario')
                                            .exec();
     resposta.then(
        function(post){
            let modificarPost = post.map((mat)=>(mat.post));
            res.status(200).json(post);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.deletarPost = function (req,res){
    let post = req.body;
    let promise = Post.remove(post);
    promise.then(
        function(post){
            res.status(200).json(post);
            
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}
module.exports.detalhePost = function(req, res){
    let id = req.params.id;    
    let promise = Aluno.findById(id);
    promise.then(
        function(post){            
            res.status(200).json(post);
            console.log(" A operação foi completada com sucesso")
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}
