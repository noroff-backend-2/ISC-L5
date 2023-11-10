class OrderService {
    constructor(db) {
        this.client = db.sequelize;
        this.Order = db.Order;
        this.Product = db.Product;
        this.User = db.User;
    }
    //Get orders for a specific User using a Raw query
    async getAllOrders(userId) {
        try {
            const order = await this.client.query('SELECT * FROM Orders WHERE Orders.UserId = ' + userId, {
                type: this.client.QueryTypes.SELECT
            });
            
            return order;
        } catch (error) {
            console.error("Error getting orders:", error);
            throw error;
        }
      }

    //Get a specific order's Details using Sequelize RAW Query
    async getOrderDetails(orderId) {
        const order = await this.client.query('SELECT * FROM Orders JOIN Users ON Orders.UserId = Users.id JOIN OrderProducts ON Orders.id = OrderProducts.OrderId JOIN Products ON OrderProducts.ProductId = Products.id WHERE Orders.id = ' + orderId, {
            type: this.client.QueryTypes.SELECT
        });
        console.log("Returning order details for OrderId: " + orderId);
        return order;  
    }
    
}
module.exports = OrderService;