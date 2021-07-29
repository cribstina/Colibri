const { response } = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const Auth = require("../config/auth");
const { Op } = require('sequelize');

// Criação de usuário e autenticação
const createAccount = async(req,res) => {
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

// Mostra todos os usuários
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

// // Deleta um perfil de usuário
// const destroy = async(req,res) => {
//     const {id} = req.params;
//     try {
//         const deleted = await User.destroy({where: {id: id}});
//         if (deleted) {
//             return res.status(200).json("Usuário deletado com sucesso.");
//         } 
//         throw new Error ();
//     }catch(err){
//         return res.status(500).json("Usuário não encontrado.");
//     }

// };

// Usuário edita seu próprio perfil
const updateProfile = async(req,res) => {
    const {token} = req.params;
    try {
        const token = User.getToken(req);
        const payload = User.decodeJwt(token);
        const user = await Auth.findByPk(payload.sub);
        const [update] = await User.updateProfile(req.body, {where: {id: sub}});
        if (updateProfile) {
            const user = await User.findByPk(token);
            return res.status(200).send(user);
        }
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }

};

// Usuário vê a própria lista de favoritos
const getUserListFav = async(req,res) => {
    const{token} = req.params;
    const payload = User.decodeJwt(token);
    const product = await Auth.findByPk(payload.sub);
    try{
        await product.setUser(user);
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

// Usuário faz um comentário sobre um produto
const addCommentProduct = async(req,res) => {
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
    const user = await User.findByPk(payload.sub);
    try{
        const comment = await User.findByPk(sub);
        const review = await Review.findByPk(req.body.reviewId);
        await user.setReview(review);
        return res.status(200).json(comment);
    }catch(err){
        return res.status(500).json({err});
    }

};

// Usuário apaga o próprio comentário
const commentDelet = async(req,res) => {
    const {token} = req.params;
    const payload = Auth.decodeJwt(token);
    const user = await User.findByPk(payload.sub);
    try {
        const commentDeleted = await User.commentDelet({where: {id: sub}});
        if (commentDeleted) {
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
    createAccount,
    updateProfile,
    //destroy,
    getUserListFav,
    addCommentProduct,
    commentDelet

};