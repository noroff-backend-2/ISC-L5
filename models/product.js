module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        Name: Sequelize.DataTypes.STRING,
        Description: Sequelize.DataTypes.STRING,
        Price: Sequelize.DataTypes.DOUBLE,
        Country: Sequelize.DataTypes.STRING,
        Brand: Sequelize.DataTypes.STRING,
        Condition: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });

	return Product
}