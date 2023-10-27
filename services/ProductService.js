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

    //Using Seuquelize without Raw Query
    async getProductDetails(productId) {
        console.log("productId: " + productId);
		const product = await this.Product.findOne({ where: {id: productId}});
        console.log("Details of Product " + productId + " retrieved from DB without RAW query: " + product);
        return product;
	}

    //Get product Details using Sequelize RAW Query
    // async getProductDetails(productId) {
    //     console.log("***In the Service, productId: " + productId);
    //     const product = await this.client.query(`SELECT * FROM Products where id = ${productId}`)
    //     .catch(function(err){
    //         console.error(err);
    //     });
    //     console.log("Details of Product " + productId + " retrieved from DB w RAW query: " + product);
    //     return product;
        
    // }
    //Using Sequelize RAW Query with Replacements
    // async getProductDetailsZZZ(animalId, userId)  {
    //     sequelize.query('SELECT * FROM Products where id = :ProductId',{ replacements:
    //     {
    //     ProductId: productId
    //     }}).then( result => {
    //     return result
    //         }).catch( err => {
    //             return (err)
    //         })
    // }

    /*-------------------------------------*/

    async getAllProducts() {
        try {
          const products = await this.Product.findAll(); 
          return products;
        } catch (error) {
          console.error("Error getting products:", error);
          throw error;
        }
      }

    async orderProduct(userId, productId) {
        const user = await this.Order.findOne({ where: { userId: userId } })
        .catch(function(err){
            console.error(err);
            return;    
        });
        
        const product = await this.Product.findOne({ where: { id: productId } })
        .catch(function(err){
            console.error(err);
            return;
        });
        
        console.log("Attempting to create Order");

        // Create an Order record
        await this.Order.create(
            {
                UserId: userId,
                ProductId: productId
            }
        ).catch(function(err){
            console.error(err);
        });
        // Update the User with an Ordered message
        return { message: 'This product has been ordered.' };    
    }
    
}
module.exports = ProductService;