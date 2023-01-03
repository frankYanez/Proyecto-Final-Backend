//Requerimos el metodo Router de express
const { Router } = require('express')
//Ejecutamos ese metodo en la variable router
const router = Router()

const carts = []

//Routes
router.post('/', (req, res)=>{
    let newCart = {
        id,
        products: []
    }

    if(!carts){
        newCart = {
            id: 1,
            products: []
        }
    }else{
        newCart = {
            id: carts[ carts.length - 1].id + 1
        }
        
    }
})

router.get('/:cid', (req,res)=>{
    const cartId = req.params.cid

    const cartFound = carts.find( cart => cart.id === cartId)

    res.send(cartFound.products)
})

module.exports = router;