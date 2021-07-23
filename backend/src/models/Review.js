const DataTypes = require("sequelize");
const sequelize = requeite("../config/sequelize");

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
        type: DataTypes.BLOB,
    }
});

Review.associate = function(models) {
    Review.belongsTo(models.User, { });
    Review.belongsTo(models.Product, { });
}