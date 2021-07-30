const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Review = sequelize.define('Review', {
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },

    reting: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    media: {
        type: DataTypes.STRING,
    }
});

Review.associate = function(models) {
    Review.belongsTo(models.User, { });
    Review.belongsTo(models.Product, { });
}