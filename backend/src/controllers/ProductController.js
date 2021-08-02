const { response } = require('express');
const { Op } = require('sequelize');
const User = require('../models/User');
const Review = require('../models/Review');
const Product = require('../models/Product');

//Mostra todos os produtos do site
const index = async(req, res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json({products});
    } catch (error) {
        return res.status(500).json({err});
    }
};



//Postar produto
const create = async(req,res) => {
    const {id} =  req.params;
    try {
        const product = await Product.create(req.body);
        return res.status(200).json({message: "Produto postado com sucesso!", product: product});
        product.reload();
    } catch (error) {
        res.status(500).json({error: err});
    }
};


//Editar postagem de produto
const update = async(req,res) => {
    try {
        const {id} = req.params;
        const [updated] = await Product.update(req.body, {where: {id: id}});
        if (updated) {
            const product = await Product.findByPk(id);
            return res.status(200).send(user);
        }
        throw new Error();
    } catch (error) {
        return res.status(500).json("Produto não encontrado");
    }
};

//Deletar postagbem de produto
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Product.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Produto deletado com sucesso.");
        }
        throw new Error();
    } catch (error) {
        return res.status(500).json("Produto não encontrado.")
    }
};

//Adicionar produto ao carrinho
const addToCart = async(req,res) => {
    const token = Auth.getToken(req);
    const user = Auth.user(token);
    try {
        const loggedUser = await User.findByPk(req.params.id);
        const inCart = 
    } catch (error) {
        
    }
}


//Remover produto do carrinho


//Favoritar produto


//Desfavoritar produto


