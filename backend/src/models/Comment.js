const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Comment = sequelize.define('Comment', {
    description: {
        type: DataTypes.STRING,
        allowNull: false

    },

    date: {
        type: DataTypes.DATEONLY,
        allowNull: false

    }

}, {

    // timestamps: false

});

Comment.associate = function(models){
    Comment.belongsToMany(models.User, {through: 'commentUser', as: 'InComment', foreignKey: 'userId'});
    Comment.belongsToMany(models.Product, {through: 'productUser', as: 'InProduct', foreignKey: 'productId'});

}

module.exports = Comment;



