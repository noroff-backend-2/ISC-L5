module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        Name: Sequelize.DataTypes.STRING,
        Description: Sequelize.DataTypes.STRING,
        Price: Sequelize.DataTypes.DOUBLE,
        Country: Sequelize.DataTypes.STRING,
        Condition: Sequelize.DataTypes.STRING,
        Brand: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    // Product.associate = function(models) {
    //     Product.belongsToMany(models.User, { through: models.Order });
    // };
	return Product
}