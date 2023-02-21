const bcrypt = require('bcrypt')


const hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

const isvalidPass = (userDB, password) => {
    return bcrypt.compareSync(password, userDB.password)
}

module.exports = { hashPassword, isvalidPass}