const { Router } = require("express");
const auth = require("../../middlewares/auth");
const UserModel = require("../../models/user.model");
//Ejecutamos ese metodo en la variable router
const router = Router();
//Llamamos al mongoManager




router.get( '/login', (req,res)=>{
    res.render('login')
})

router.post('/login', (req,res)=>{
    const {mail, name} = req.body
    console.log(req.body);
    
    res.redirect('/api/session/profile')
})

router.get( '/register', (req,res)=>{
    res.render('register')
})

router.post('/register', async(req,res)=>{
    const { name , mail , password , age} = req.body
    if (!name || !mail || !password || !age) {
        res.json({success: 'Error. Please, complete all fields'})
    } else {
        await UserModel.create({
            name: name,
            email: mail,
            age: age,
            password: password
        })
        req.session.mail = mail
        
        res.redirect('/api/session/profile')
    }
})

router.get('/profile', auth ,async (req,res)=>{
    const user = await req.session.user
    res.render('profile', {user })
})


module.exports = router;