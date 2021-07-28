const { response } = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const Auth = require("../config/auth");
const { Op } = require('sequelize');

// Criação de usuário e autenticação
const create = async(req,res) => {
    try {
		const { password } = req.body;
		const hashAndSalt = Auth.generatePassword(password);
		const salt = hashAndSalt.salt;
		const hash = hashAndSalt.hash;
		const newUserData = {
			email: req.body.email,
			name: req.body.name,
            CPF: req.body.cpf,
            gender: req.body.gender,
			birthdate: req.body.birthdate,
            address: req.body.gender,
            profile_picture: req.body,
            role: req.body.role,
			hash: hash,
			salt: salt
		}
		const user = await User.create(newUserData);
		return res.status(201).json({user: user});
	} catch (e) {
		return res.status(500).json({err: e});
	}
};

// Mostra todos os usuários do site
const index = async(req,res) => {
    try {
        const users = await User.findAll ({
        });
        return res.status(200).json({users});
    }catch(err){
        return res.status(500).json({users});
    } 

};

// Mostra um usuário específico
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk (id);
        return res.status(200).json({user});
    }catch (err){
        return res.status(500).json({err});
    }

};

// Edita perfil do usuário
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [update] = await User.update(req.body, {where: {id: id}});
        if (update) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        }
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }

};

// Deleta um perfil de usuário
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if (deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        } 
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }

};

// Mostra a lista com os produtos favoritados
const getUserListFav = async(req,res) => {
    try{
        const{id} = req.params;
        const user = await User.findByPk(id, {
           include: [{
               model: User
           }] 
           
        });
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({err});
    }

};

// Adição de um comentário a um produto pelo usuário
const addCommentProduct = async(req,res) => {
    try{
        const comment = await User.findByPk(id);
        const review = await Review.findByPk(req.body.reviewId);
        await user.setReview(review);
        return res.status(200).json(comment);
    }catch(err){
        return res.status(500).json({err});
    }

};

const commentDelet = async(req,res) => {
    const {id} = req.params;
    try {
        const commentDeleted = await User.commentDestroy({where: {id: id}});
        if (commmentDeleted) {
            return res.status(200).json("Comentário deletado com sucesso.");
        } 
        throw new Error ();
    }catch(err){
        return res.status(500).json("Comentário não encontrado.");
    }

};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    getUserListFav,
    addCommentProduct,
    commentDelet

};