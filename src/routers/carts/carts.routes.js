//Requerimos el metodo Router de express
const { Router } = require('express')
//Ejecutamos ese metodo en la variable router
const router = Router()
//Llamamos a File System
const fs = require('fs/promises')

const { existsSync } = require('fs')

const getCarts = async ()=>{
    if (existsSync('carts.json')) {
        const carts = await fs.readFile('carts.json', 'utf-8')
        return carts
    } else {
        return []
    }
}

const getCart = async (id)=>{
    const cartsString = await getCarts()
    const carts = JSON.parse(cartsString)

    const cartFound = carts.find( cart => cart.id == id)

    return cartFound
}



//Routes
router.post('/', async (req, res)=>{
    const id = 0
    const carts = await getCarts()
    

    let newCart = {
        id,
        products: []
    }
    

    if(carts.length == 0){
        newCart = {
            id: 1,
            products: []
        }
    }else{
        newCart = {
            id: carts[ carts.length - 1].id + 1
        }
    }
    carts.push(newCart)

    fs.writeFile('carts.json', JSON.stringify(carts,null, '\t'))

    res.send({
        newCart
    })
    
})

router.get('/:cid', async (req,res)=>{

    const cartId = req.params.cid

   const cartFound = await getCart(cartId)

    res.send(cartFound.products)
})

router.post('/:cid/product/:pid',(req,res)=>{
    const cartId = req.params.cid
    const productId = req.params.pid

    const cartFound = carts.find( cart => cart.id === cartId)
    


})
module.exports = router;