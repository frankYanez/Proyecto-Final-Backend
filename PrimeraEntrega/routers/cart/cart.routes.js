//Requerimos el metodo Router de express
const { Router } = require('express')
//Ejecutamos ese metodo en la variable router
const router = Router()
//Llamamos a File System
const fs = require('fs')
const carts = []

//Routes
router.post('/', (req, res)=>{
    

    if(!carts){
        newCart = {
            id: 1,
            products: []
        }
        carts.push(newCart)
    }else{
        newCart = {
            id: carts[ carts.length - 1].id + 1
        }
        carts.push(newCart)
    }

    fs.writeFile('../carts.json', JSON.stringify(carts,null, '\t'))
    
})

router.get('/:cid', (req,res)=>{
    const cartId = req.params.cid

    const cartFound = carts.find( cart => cart.id === cartId)

    res.send(cartFound.products)
})

router.post('/:cid/product/:pid',(req,res)=>{
    const cartId = req.params.cid
    const productId = req.params.pid

    const cartFound = carts.find( cart => cart.id === cartId)
    


})
module.exports = router;