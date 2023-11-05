class ProductService {
    constructor(db) {
        this.client = db.sequelize;
        this.Order = db.Order;
        this.Product = db.Product;
        this.User = db.User;
    }

    async getOne(productId) {        
        return await this.User.findOne({
            where: {
                id: productId
            }
        }).catch(function(err){
            console.log(err);
        });
    }

    async getAllProducts() {
        try {
          const products = await this.Product.findAll(); 
          return products;
        } catch (error) {
          console.error("Error getting products:", error);
          throw error;
        }
      }

    //Get product Details using Sequelize RAW Query
    async getProductDetails(productId) {
        const product = await this.client.query('SELECT * FROM Products where id = ' + productId, {
            type: this.client.QueryTypes.SELECT
        });
        console.log(product);
        return product;  
    }

    //Get product Details using Sequelize RAW Query with Replacement
    // async getProductDetails(productId)  {
    //     const product = this.client.query('SELECT * FROM Products where id = :ProductId',
    //     { 
    //         replacements: { ProductId: productId },
    //         type: this.client.QueryTypes.SELECT
    //     });
    //     console.log(product);
    //     return product;  
    // };

    //Get product Details using Sequelize RAW Query with Binding
    // async getProductDetails(productId)  {
    //     const product = this.client.query('SELECT * FROM Products where id = $ProductId',
    //     { 
    //         bind: { ProductId: productId },
    //         type: this.client.QueryTypes.SELECT
    //     });
    //     console.log(product);
    //     return product;  
    // };
    
}
module.exports = ProductService;