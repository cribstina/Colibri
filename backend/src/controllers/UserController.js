const { response } = require('express');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Product = require('../models/Product');
const Auth = require("../config/auth");
const path = require('path');
const mailer = require('../config/mail').mailer;
const hbs = require("handlebars");
const fsPromise = require('fs').promises;


// Criação de usuário e autenticação
const createAccount = async (req,res) => {
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
            return res.status(201).json({ user: user });
        } catch(e){
            return res.status(500).json({ err: e });
        }

};

// Usuário recebe um email quando cria uma conta
const emailSent = async (req,res) => {
    try {
            const pathTemplate = path.resolve(__dirname, '..', '..', 'templates');
            console.log(pathTemplate);
            const user = await User.create(req.body);
            readHtml(path.join(pathTemplate, "email.html"), (err,html) => {
                const template = hbs.compile(html);
                const replacements = {
                    username: user.username
                };
                const htmlToSend = template(replacements);
                const message = {
                    from: "testebacktt@gmail.com",
                    to: user.email,
                    subject: "Email cadastrado com sucesso.",
                    html: htmlToSend
                }
                mailer.sendMail(message, (err) => {
                    console.log(err + "!");
                });
            });
            return res.status(201).json({user});
        } catch(err) {
            return res.status(200).json(err + "!");
        }

};


// Usuário edita seu próprio perfil
const updateProfile = async(req,res) => {
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
    try {
            const [updated] = await User.update({where: {id: payload.sub}});
            if (updated) {
                await User.findByPk(payload.sub);
                return res.status(200).json("Perfil atualizado com sucesso.");
            }
            throw new Error();
    } catch (err) {
            return res.status(500).json(e + "!");
        }

};


// Usuário vê a própria lista de favoritos
const showListFavUser = async (req, res) => {
    const token = Auth.decodeJwt(req);
    const payload = Auth.decodeJwt(token);
    const product = await User.findByPk(payload.sub);
    try {
            await product.setUser(user);
            const user = await User.findByPk(id, {
                include: [{
                    model: User
                }]

            });
            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json({err});
        }

};


// Usuário coloca uma foto no perfil
const addPictureProfile = async (req, res) => {
    try {
            const token = Auth.getToken(req);
            const payload = Auth.decodeJwt(token);
            if (req.file) {
                const path = process.env.APP_URL + "/uploads/" + req.file.filename;
                const atributes = {
                    path: path
                }
                const [updated] = await User.update(atributes, {where: {id: payload.sub}});
                console.log("path");
            }
            return res.status(200).json("Foto adicionada com sucesso!");

        }catch(err) {
            return res.status(500).json(err + "!");
        }
};


// Usuário remove sua foto de perfil
const removePictureProfile = async(req, res) => {
    const {token} = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
	try {
		
		    const picture = await User.findByPk(payload.sub);
		    const pathDb = picture.path.split("/").slice(-1)[0];
		    await fsPromise.unlink(path.join(__dirname, "..", "..", "uploads", pathDb));
		    await picture.destroy();
		    return res.status(200).json("Foto deletada com sucesso");
	    }catch(err) {
		    return res.status(500).json(err + "!");
	    }
};


// Mostra todos os usuários
const index = async (req, res) => {
    try {
            const users = await User.findAll();
            return res.status(200).json({users});
        } catch (err) {
            return res.status(500).json({users});
        }
};


// Mostra um usuário específico
const show = async (req, res) => {
    const {id} = req.params;
    try {
            const user = await User.findByPk(id);
            return res.status(200).json({user});
        } catch (err) {
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
    } catch(err) {
        return res.status(500).json({err});
    }

};

// Deleta um perfil de usuário
const destroy = async (req, res) => {
    const {id} = req.params;
    try {
            const deleted = await User.destroy({where: {id: id}});
            if (deleted) {
                return res.status(200).json("Usuário deletado com sucesso.");
            }
            throw new Error();
        }catch(err) {
            return res.status(500).json("Usuário não encontrado.");
        }

};

// Atualiza um perfil de usuário
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



module.exports = {
    createAccount,
    emailSent,
    updateProfile,
    showListFavUser,
    addPictureProfile,
    removePictureProfile,
    index,
    show,
    destroy,
    update,
    addCommentProduct
    
}