const express = require('express')
const app = express()
const PORT = 8080
const appRoutes = require('./routers/app.routers')


app.use('/api', appRoutes)

app.listen(PORT, ()=>{
    console.log('Port is listening on ' + PORT);
})