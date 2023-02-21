const Router = require('express');
const passport = require('../middlewares/passport.middleware')


const router = Router()
//Github

router.get('/github', passport.authenticate('github' , {  scope: ['user:email']}))

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/github-error'}), 
async (req , res ) => {
    const sessionUser = {
        name: req.user.name,
        email: req.user.email ,
        age: req.user.age
    }
    req.session.user = sessionUser
})