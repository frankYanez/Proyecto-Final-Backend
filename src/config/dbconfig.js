const mongoose = require('mongoose')
const options  = require('./options')

mongoose.set('strictQuery', false);
mongoose.connect(options.mongoDB.url, (err)=>{
    if(err) return console.log('Error to connect')
    console.log('Connect to Correct');;}
)

