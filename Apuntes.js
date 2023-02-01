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




// Consigna
//  Configurar nuestro proyecto para que
// trabaje con Handlebars y websocket.

// Aspectos a incluir
//  Configurar el servidor para integrar el
// motor de plantillas Handlebars e instalar
// un servidor de socketio al mismo.
//  Crear una vista “home handlebars” la
// cual contenga una lista de todos los,
// productos agregados hasta el momento

// ‘Ademas, crear una vista
// “realTimeProducts handlebars", la cual
// vivira en el endpoint
// “ realtimeproducts" en nuestro views
// router, ésta contendra la misma lista de
// productos, sin embargo, ésta trabejaré
// con websockets
// Al trabajar con websockets, cada
// ‘vez que creemos un producto
// nuevo, o bien cade vez que
// eliminemos un producto, se debe
// actualizar automaticamente en
// dicha vista la lista,

// Sugerencias

//  Ya que la conexién entre una consulta
// HTTP y websocket no esta contemplada
// dentro de la clase. Se recomienda que,
// para la creacion y eliminacién de un
// Producto, Se cree un formulario simple
// ena vista
// roalTimeProductshandlebars. Para que
// el contenido se envie desde
// websockots y no HTTP. Sin embargo,

// no es la mejor solucion, leer el

// siguiente punto.

// Si se desea hacer la conexion de socket
// emits con HTTP, deberas buscar la
// forma de utilizar el servidor io de
// Sockets dentro de la peticién POST.
// Como utlizarias un emit dentro del
// Post?

 
