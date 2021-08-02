const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Comment = sequelize.define('Comment', {
    description: {
        type: DataTypes.STRING,
        allowNull: false

    }

}, {

    // timestamps: false

});

Comment.associate = function(models){
    Comment.belongsTo(models.Product, { });
    Comment.belongsTo(models.Comment, { });

}

module.exports = Comment;



