const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    
    },

    name: {
        type: DataTypes.STRING,
        allowNull: true

    },

    hash: {
		type: DataTypes.STRING

	},

	salt: {
		type: DataTypes.STRING

    },

    CPF: {
        type: DataTypes.STRING,
        allowNull: true

    },

    gender: {
         type: DataTypes.STRING,
         allowNull: true

    },

    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true

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
     User.hasMany(models.Product, { });
     User.hasMany(models.Comment, { });
     User.belongsToMany(models.Product, {through: 'favoriteList', as: 'inList', foreignKey: 'userId'});
     User.belongsToMany(models.Product, {through: 'cart', as: 'inCart', foreignKey: 'userId'});
       
}

module.exports = User;