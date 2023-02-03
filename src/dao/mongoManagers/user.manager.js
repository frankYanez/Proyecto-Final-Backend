const model = require("../../models/user.model");

class UserMongoManager {
  async getProducts() {
    try {
      const users = await model.find();
      return users;
    } catch (error) {
      throw new Error("Error");
    }
  }

  async addProduct(payload) {
    try {


      const newUser = model.create(payload);

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
}

module.exports = UserMongoManager;
