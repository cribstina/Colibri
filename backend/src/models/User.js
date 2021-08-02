const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false

    },

    hash: {
		type: DataTypes.STRING

	},

	salt: {
		type: DataTypes.STRING

    },

    CPF: {
        type: DataTypes.STRING,
        //allowNull: false

    },

    gender: {
         type: DataTypes.STRING,
         //allowNull: false

    },

    birthdate: {
        type: DataTypes.DATEONLY,
        //allowNull: false

    },

    address: {
        type: DataTypes.STRING,
        allowNull: true

    },

    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true
    
    },

    type_user: {
        type: DataTypes.BOOLEAN,
        allowNull: true

    },

});

User.associate = function(models){
     User.hasMany(models.Product);
     User.hasMany(models.Comment);
     User.belongsToMany(models.Product, {through: 'favoriteList', as: 'listFavorited', foreignKey: 'userId'});
     User.belongsToMany(models.Product, {through: 'cart', as: 'inCart', foreignKey: 'productId'});
}

module.exports = User;