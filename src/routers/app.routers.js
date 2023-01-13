const { Router } = require('express')
const router = Router()

const cartRoutes = require('./carts/carts.routes')
const productsRoutes = require('./products/products.routes')
const realTime = require('./realTime/realTime.routers')

router.use('/products',productsRoutes)
router.use('/carts',cartRoutes)
router.use('/realtimeproducts', realTime)

module.exports = router;
