const { response } = require('express');
const Comment = require('../models/Comment');
const Product = require('../models/Product');
const Auth = require('../config/auth');
const User = require('../models/User');

//Criação de um comentário por um usuário relacionado a um produto
const createComment = async(req,res) => {
    const {id} = req.params; 
    try{
            const token = Auth.getToken(req);
            const payload = Auth.decodeJwt(token);        
            const commentProduct = await Comment.create(req.body);
            const user = await User.findByPk(payload.sub);
            const product = await Product.findByPk(id);
            await product.addComment(commentProduct);
            await user.addComment(commentProduct);
            return res.status(200).json("Comentário adicionado com sucesso!.");
        }catch(err){
            res.status(500).json({error: err});
        }

};

// Usuário deleta o próprio comentário
const deleteComment = async(req,res) => {
    const {id} = req.params; 
    try {
            const token = Auth.getToken(req);
            const payload = Auth.decodeJwt(token);
            const deleted = await Comment.destroy(id);
            const user = await User.findByPk(payload.sub);
            const product = await Product.findByPk(id);
            await product.removeComment(deleted);
            await user.removeComment(deleted);  
            if(deleted){
                return res.status(200).json("Comentário deletado com sucesso.");
            }
            throw new Error ();
        }catch(error){
            return res.status(500).json("Comentário não foi encontrado.");
        }

};

// Mostra todos os comentários
const index = async(req,res) => {
    try {
            const comments = await Comment.findAll();
            return res.status(200).json({comments});
        }catch(error){
            return res.status(500).json({err});
        }

};



// Mostra um comentário específico
const show = async(req,res) => {
    const {id} = req.params; 
    try {
            const comment = await Comment.findByPk(id);
            return res.status(200).json({comment});
        }catch(error){
            return res.status(500).json({err});
        }

};

// Deleta um perfil de usuário
const adminCommentDestroy = async (req, res) => {
    const {id} = req.params;
    try {
            const deleted = await Comment.destroy({where: {id: id}});
            if (deleted){
                return res.status(200).json("Comentário deletado com sucesso.");
            }
            throw new Error();
        }catch(err){
            return res.status(500).json("Comentário não encontrado.");
        }

};

// Atualiza um comentário de um usuário
const update = async(req,res) => {
    const {id} = req.params;
    try {
            const [update] = await Comment.update(req.body, {where: {id: id}});
            if (update){
                const comment = await Comment.findByPk(id);
                return res.status(200).json(comment);
            }
            throw new Error();
        }catch(err){
            return res.status(500).json("Comentário não encontrado.");
        }

}

//ADMIN deleta comment do usuário (validação na rota)
const adminDeleteComment = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Comment.destroy({where: {id: id}});
        if (deleted) {
            return res.status(200).json("Comentário deletado com sucesso.")
        }
        throw new Error();
    } catch (error) {
        return res.status(500).json("Comentário não encontrado.")
    }
}


module.exports = {
    createComment,
    deleteComment,
    index, 
    show,
    update,
    adminDeleteComment,
    adminCommentDestroy
};
