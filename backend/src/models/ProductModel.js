const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    name: {
        Type: DataTypes.STRING,
        allowNull: false

    },

    wight: {
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
    Product.hasMany(models.Review);

}

module.exports = Product;