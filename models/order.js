module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('Order', {
        OrderDate: Sequelize.DataTypes.DATEONLY,
    },{
        timestamps: false,
    }, 
    );

    Order.associate = function (models) {
        Order.belongsToMany(models.Product, { through: 'OrderProducts', timestamps: false });
    };
	return Order
};