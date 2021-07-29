const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    name: {
        Type: DataTypes.STRING,
        allowNull: false

    },

    weight: {
        Type: DataTypes.INTEGER,
        allowNull: false
    },

    description: {
        Type: DataTypes.TEXT,
        allowNull: false
    },

    price: {
        Type: DataTypes.INTEGER,
        allowNull: false
    },
    
}, {

    // timestamps: false

});

Product.associate = function(models){
    Product.belongsTo(models.User, { });
    Product.hasMany(models.Review);
    Product.belongsToMany(models.User, {through: 'favoriteList', as: 'inList', foreignKey: 'productId'});
    Product.belongsToMany(models.User, {through: 'cart', as: 'inCart', foreignKey: 'productId'});
}

module.exports = Product;