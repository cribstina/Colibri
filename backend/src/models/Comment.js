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
    Comment.belongsTo(models.User, { });
    Comment.belongsTo(models.Product, { });
}

module.exports = Comment;



