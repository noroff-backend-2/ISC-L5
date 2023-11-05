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
        console.log("***getProductDetails in ProductsService - productId: " + productId);
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
        console.log("***getAllProducts being run in Product Service"); 
          const products = await this.Product.findAll(); 
          return products;
        } catch (error) {
          console.error("Error getting products:", error);
          throw error;
        }
      }
    
}
module.exports = ProductService;