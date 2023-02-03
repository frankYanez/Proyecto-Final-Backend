const { model } = require('../models/user.model')

class UserService 
{
    async create(payload){
        const userSaveModel = new model.users(payload);
        //Metodo de mongoDB
        return await userSaveModel.save()
    }

    async getOne(payload){
        
        return model.findOne()
    }
}

module.exports = UserService;