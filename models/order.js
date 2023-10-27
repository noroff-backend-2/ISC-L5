module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('Order', {},{
        timestamps: true,
    });
	return Order
}