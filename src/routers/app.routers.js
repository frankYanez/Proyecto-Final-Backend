const { Router } = require('express')
const router = Router()

const cartRoutes = require('./carts/carts.routes')
const productsRoutes = require('./products/products.routes')
const session = require('./sessions/sessions.routes')

router.use('/products',productsRoutes)
router.use('/carts',cartRoutes)
router.use('/session', session)


module.exports = router;
