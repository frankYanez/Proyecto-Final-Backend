// <-----Handlebbars----->
//main.handlebars es el que espera toda la configuracion

//Se crea una plantilla html, y adentro del body creamos la variable {{{ body }}} que es donde va a ir toda la logica, igual que en react

//Todas las otras plantillas se colocan al mismo nivel de  la carpeta VIEWS

//Necesitamos 3 templates 
//Ejecucion de handlebars
//1 app.engine()

//donde estan alojadas nuestras plantillas
//2 app.set()

//3 app.set()

//La carpeta PUBLIC: Si va por fuera del src Va al mismo nivel que el package.json y en el mildweare se pone solo 'public'. Pero si esta por dentro del src entonces en el mildware se pone 'src/public'

//require(path): para resolver la ruta de la carpeta views. Se importa y en app.set( 'views', path.join(__dirname + './views))

//MULTER: 
//Definir donde y como guardar los archivos de multer. Una vez instalado multer, lo requerimos require('multer') y luego:

// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null, __dirname + '/public/img')
//     },
//     filename:(req,file,cb)=>{
//         cb(null, file.originalname)
//     }
// })

//Para exportarlo:
// module.exports = multer({ storage })

//Upload.Single: porque se sube un archivo, upload es un mildware que hay que configurar, avatar: es el nombre del input en el formulario html
// router.post('/single’, upload.single(‘avatar')|, (req, res) => {
//     console.log( req. file) ;
//     res.send('ok')
     
// }

//Para incluir multer con formularios debemos poner en el formulario un atributo: enctypr= multipart/form-data



//<------MONGO DB----->

//BD RELACIONAL:SQL : Esta almacenada toda la informacion en tablas, como si fuera un excel.

//Nos conectamos a la base de datos a travez de mongoose
//Schema: campos que quiero guardar
//Model: nombre de la tabla

//Cuando vamos a insertar varos objetos se insertan adentro de un array



// <----- COOKIES ------->
// Instalamos cookie-parser

//En los milddware ejecutamos el cookie parser para poder usar los metodos de la libreria de cookie
// const cookieParser = requiera('cookie-parser')
// app.use(cookieparser(['nombre-clave']))
//nombre-clave: Para firmar nuestras cookies 
 
//res.cookie('nombreCookie', 'valorCookie', {hhtpOnly: true, signed: true})
//req.cookies.nombreCookie = Para ver el valor de la cokkie
//res.clearCookie('nombreCookie')

//httpOnly: true. Es para que nadie pueda cambiar el valor de nuestras cookies. Se envia como un objeto dentro de res.cookie
//signed: true. Para que las cookies vayan firmadas. Se cambiaria el atributo res.cookie => res.signedCookie.valorCookie

//<------ SESSION ----->
//Instalamos express-session

//solo utilizamos el objeto req.session en las sessiones.

//req.session.destroy = me borra las sessiones guardadas incluso en archivos o BD

//Para destruir una session: req.session.destroy((error)=>{
//     res.send(error)
// })


//---NUNCA HACEMOS REDIRECT EN PEETICIONES POST--


//<----- FILESTORAGE----->
//instalamos session-file-store

//Para guardar las sessiones en base de datos o archivos, se hace de forma asincrona. Por eso necesitamos colocar el await y tambien req.session.save((error)=> if(err){ log(error)} else{res.redirect('/)} )
//De esta forma nos aseguramos de que la sesion fue guardada

//const FileStore = require('session-file-store)(session)  --> Se inicializa y se le pasa como parametro la session que estamos usando

//Cookies,session y Storage Clase. Hora 1:02 (Aqui dice como hacer la session en mongo)

//Instalamos Connect-Mongo

//Usampns mongo conect en el storage

//<----- BCRYPT ----->
//lo requerimos y luego usamos 2 metodos: bcrypt.hashSync(passwordAEncriptar, bcrypt.genSaltSync(10 "este es el numero de letras aleatorias que genera la contraseña"))


//<----- PASSPORT ----->

//Requerimos passport.

//app.use(passport.initialize())
//app.use(passport.session())


// App ID: 296070

// Client ID: Iv1.4222d2e4c70cba07

//42f940875465b467b155bce7bf12e3b31e84fbde