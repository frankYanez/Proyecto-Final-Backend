// Importamos el Schema de Mongoose
const { Schema, mongoose } = require('mongoose')
//Apuntamos a una colleccion
const userCollection = 'users';

//Declaramos una nueva instancia de un Schema y pasamos un objeto con los campos que va a incluir como por ejemplo el tipo de dato, si es requerido, los caracteres maximos, todo esto dentro de un objeto
const UserSchema = new Schema( {
    nombre: {type: Schema.Types.String, require: true, max: 30},
    apellido: {type: Schema.Types.String, require: true, max: 30},
    edad: {type: Schema.Types.Number, require: true, max: 2},
    email: {type: Schema.Types.Number, require: true, unique:true, max: 100},
    password: {type: Schema.Types.String, require: true, max: 100},
})

const usersModel = mongoose.model(userCollection, UserSchema);

module.exports = usersModel