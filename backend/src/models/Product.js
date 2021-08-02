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
        Type: DataTypes.STRING,
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
    Product.hasMany(models.Comment);

}

module.exports = Product;