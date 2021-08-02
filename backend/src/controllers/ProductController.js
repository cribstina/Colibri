const User = require('../models/User');
const Product = require('../models/Product');
const Auth = require("../config/auth");

//Mostra todos os produtos do site
const index = async(req, res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json({products});
    } catch (error) {
        return res.status(500).json({err});
    }
};


//Mostra produto específico
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        return res.status(200).json({product});
    } catch (error) {
        return res.status(500).json({err});
    }
};


//Mostra produtos de dadas categorias
const byCategory = async(req,res) => {
    const {id} = req.params;
    try {
        const products = await Product.findAll({where: {category: req.body.category}});
        products.reload()
    } catch (error) {
        return res.status(500).json({err});
    }
};


//Postar produto
const create = async(req,res) => {
    const token = Auth.getToken(req);
	const payload = Auth.decodeJwt(token);
	const user = await User.findByPk(payload.sub);
    try {
        const product = await Product.create(req.body);
        await user.addProduct(product);
        product.reload();
    } catch (error) {
        res.status(500).json({error: err});
    }
};


//Editar postagem de produto
const update = async(req,res) => {
    const token = Auth.getToken(req);
	const payload = Auth.decodeJwt(token);
	const user = await User.findByPk(payload.sub);
    try {
        const [updated] = await Product.update(req.body, {where: {id: id}});
        if (updated) {
            const product = await Product.findByPk(id);
            return res.status(200).send(product);
        }
        throw new Error();
    } catch (error) {
        return res.status(500).json("Produto não encontrado");
    }
};


//Deletar postagem do próprio produto
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
	const payload = Auth.decodeJwt(token);
	const user = await User.findByPk(payload.sub);
    try {
        const productInCart = await user.setInCart(product);
        if(productInCart) {
            return res.status(200).json("Produto adicionado no carrinho.");
        }
        throw new Error ();
    } catch (error) {
        return res.status(500).json("O produto não foi encontrado.");
    }
};


//Remover produto do carrinho
const removeFromCart = async(req,res) => {
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
	const user = await User.findByPk(payload.sub);
    try {
        const removed = await user.removeInCart(product);
        if(removed) {
            return res.status(200).json("Produto removido do carrinho.");
        }
        throw new Error ();
    } catch (error) {
        return res.status(500).json("O produto não foi encontrado.");
    }
};


//Favoritar produto
const addToList = async(req,res) => {
    const token = Auth.getToken(req);
	const payload = Auth.decodeJwt(token);
	const user = await User.findByPk(payload.sub);
    try {
        const productInList = await user.setInList(product);
        if(productInList) {
            return res.status(200).json("Produto adicionado aos favoritos.");
        }
        throw new Error ();
    } catch (error) {
        return res.status(500).json("O produto não foi encontrado.");
    }
};


//Desfavoritar produto
const removeFromList = async(req,res) => {
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
	const user = await User.findByPk(payload.sub);
    try {
        const removed = await user.removeInList(product);
        if(removed) {
            return res.status(200).json("Produto removido da lista de favoritos.");
        }
        throw new Error ();
    } catch (error) {
        return res.status(500).json("O produto não foi encontrado.");
    }
};


//Deletar postagem do próprio produto
const adminDestroy = async(req,res) => {
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


module.exports = {
    index,
    show,
    byCategory,
    create,
    update,
    destroy,
    addToCart,
    removeFromCart,
    addToList,
    removeFromList,
    adminDestroy
}
