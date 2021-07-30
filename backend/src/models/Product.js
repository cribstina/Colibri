const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    category: {
        type:DataTypes.STRING,
        allowNull: false
    },

    weight: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
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