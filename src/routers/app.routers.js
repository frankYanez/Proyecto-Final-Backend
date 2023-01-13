const { Router } = require('express')
const router = Router()

const cartRoutes = require('./carts/carts.routes')
const productsRoutes = require('./products/products.routes')

router.use('/products',productsRoutes)
router.use('/carts',cartRoutes)


module.exports = router;
