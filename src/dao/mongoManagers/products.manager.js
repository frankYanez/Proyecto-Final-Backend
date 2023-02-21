const productsModel = require("../../models/product.model");



class ProductMongoManager {
  async getProducts() {
    try {
      const products = await productsModel.find().lean();
      return products;
    } catch (error) {
      throw new Error("Error");
    }
  }

  async addProduct(payload) {
    try {


      const newProduct = productsModel.insertMany(payload);

      return  newProduct;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id){
    try {
        const productFound = model.findById(id)
        return productFound
    } catch (error) {
        console.log(error);
    }
  }

  async updateItem(){

  }
}

module.exports = ProductMongoManager;