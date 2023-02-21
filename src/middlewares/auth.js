const auth = async (req, res , next)=>{
    if(req.session.user){
        next()
    }else{
        res.json({succes: 'ERROR ERROR'})
    }
}

module.exports = auth;