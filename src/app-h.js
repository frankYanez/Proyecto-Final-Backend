//Lado servidor
const express = require('express')
const app = express()
const PORT = 8080 
const appRoutes = require('./routers/app.routers')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const { UserService } = require('./dao/mongoManagers/user.manager')
const db = require('./config/dbconfig')




//Templates
app.engine('handlebars', handlebars.engine())

//donde estan alojadas nuestras plantillas
app.set('views', __dirname + '/views')

//El motor a utilizar, osea handlebars
app.set('view engine', 'handlebars')

//Mildware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/api', appRoutes)

//rutas
app.get('/home', (req,res)=>{
    
    
    res.render('home',{products})
})

//EJEMPLO MONGOOSE
const userPrefix = '/api/users'

app.post(appRoutes, async (req,res)=>{
    const service = new UserService();

    //Create es uno de los metodos de la Clase constructora en el otro archivo
    const data = await service

    res.send({ data })
})

app.get(`${userPrefix}:id`, async (req,res)=>{
    const service = new UserService();

    //Create es uno de los metodos de la Clase constructora en el otro archivo
    const data = await service.getOne()

    res.send({ data })
})




const products = []


const httpServer = app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT);
})

const socketServer = new Server(httpServer)

socketServer.on('connection', (socket)=>{
    console.log('new client');
    // console.log(socket.id);

    socket.on('create-product', (data)=>{
        const id = products.length

        


        products.push({...data, id})
        socketServer.emit('products-render', products)
    })
    
})


module.exports = products;


// // 

// // app.listen(PORT, ()=>{
// //     console.log('Port is listening on ' + PORT);
// // })
// //Lado servidor
// const express = require('express')
// const app = express()
// const PORT = 8080 
// const handlebars = require('express-handlebars')
// const { Server } = require('socket.io')




// //Templates
// app.engine('handlebars', handlebars.engine())


// //donde estan alojadas nuestras plantillas
// app.set('views', __dirname + '/views')

// //El motor a utilizar, osea handlebars
// app.set('view engine', 'handlebars')


// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(express.static('public'))

// //rutas
// app.get('/', (req,res)=>{
//     res.render('home',{})
// })




// const httpServer = app.listen(PORT, ()=>{
//     console.log('Listening on port ' + PORT);
// })

// const socketServer = new Server(httpServer)

// socketServer.on('connection', (socket)=>{
//     console.log('new client');
//     console.log(socket);
// })