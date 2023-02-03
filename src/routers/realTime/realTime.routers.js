const { Router } = require("express");
//Ejecutamos ese metodo en la variable router
const router = Router();
//Llamamos al mongoManager




router.get( '/', (req,res)=>{
    res.render('realTimeProducts')
})
module.exports = router;