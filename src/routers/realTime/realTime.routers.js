const { Router } = require("express");
//Ejecutamos ese metodo en la variable router
const router = Router();
//Lamamos a file System


router.get( '/', (req,res)=>{
    res.render('realTimeProducts')
})
module.exports = router;