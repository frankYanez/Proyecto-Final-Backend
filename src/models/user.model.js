// Importamos el Schema de Mongoose
const  mongoose = require('mongoose')
//Apuntamos a una colleccion
const userCollection = 'users';

//Declaramos una nueva instancia de un Schema y pasamos un objeto con los campos que va a incluir como por ejemplo el tipo de dato, si es requerido, los caracteres maximos, todo esto dentro de un objeto
const userSchema = new mongoose.Schema( {
    name: {type: String, require: true, max: 30},
    age: {type: Number, require: true, max: 100},
    email: {type: String, require: true, unique:true, max: 100},
    password: {type: String, require: true, max: 100},
})

const UserModel = mongoose.model(userCollection,userSchema)

module.exports = UserModel;