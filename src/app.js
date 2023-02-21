//Lado servidor
const express = require('express')
const path = require('path')
const app = express()
const PORT = 8080 
const appRoutes = require('./routers/app.routers')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const { UserService } = require('./dao/mongoManagers/user.manager')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const MongoStore = require('connect-mongo')
const daos = require('./config/dbconfig')

const cookieParser = require('cookie-parser')




//Templates
app.engine('handlebars', handlebars.engine())

//donde estan alojadas nuestras plantillas
app.set('views', __dirname + '/views')

//El motor a utilizar, osea handlebars
app.set('view engine', 'handlebars')

//Middlwares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())
app.use(session({
    name: 'cookieExample',
    secret: 'nombreClaveSecreta',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://admin:fran0211@coder.2oz4u0a.mongodb.net/ecommerce?retryWrites=true&w=majority",
        ttl: 10
    })
}))


app.use('/api', appRoutes)




//EJEMPLO COOKIE

// app.get('/session', async(req,res)=>{
//     if(req.session.counter){
//         const user = req.session.user
//         console.log(user);
//        const counterPage =  req.session.counter ++
//         res.send(`Usted ha visitado nuestra pagina ${counterPage}`)
//     }else{
//         req.session.counter = 1;
//         // res.send('Bienvendio')
//         res.render('register')
//     }
// })

// app.get('/logout', (req,res)=>{
//     req.session.destroy( err => {
//         if(err){
//             console.log(err);
//         }res.clearCookie('cookieExample')
//         res.redirect('/')
//     })
// })

// app.get('/get', async(req,res)=>{
//     res.send(req.cookies.nombreCookie)
// })
// app.get('/clr', async(req,res)=>{
    
// })

// //Login
// app.get('/', async(req,res)=>{
//     console.log(req.body)
//     res.render('login')
// })



const httpServer = app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT);
})


//Socket
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


// module.exports = products;


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