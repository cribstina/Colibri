const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },

    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
}, {

    // timestamps: false

});

Product.associate = function(models){
    Product.belongsTo(models.User, { });
    Product.hasMany(models.Product, { });
    Product.belongsToMany(models.User, {through: 'favoriteList', as: 'inList', foreignKey: 'productId'});
    Product.belongsToMany(models.User, {through: 'cart', as: 'inCart', foreignKey: 'productId'});

}

module.exports = Product;