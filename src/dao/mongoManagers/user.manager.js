const model = require("../../models/user.model");
const productsModel = require("../../pagination/model/users.model");


class UserMongoManager {
  async getProducts() {
    try {
      const users = await productsModel.find().lean();
      return users;
    } catch (error) {
      throw new Error("Error");
    }
  }

  async addProduct(payload) {
    try {


      const newUser = productsModel.insertMany(payload);

      return  newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id){
    try {
        const userFound = model.findById(id)
        return userFound
    } catch (error) {
        console.log(error);
    }
  }

  async updateItem(){

  }
}

module.exports = UserMongoManager;
