const passport = require('passport')
const UserModel = require('../models/user.model')
const { isvalidPass, hashPassword } = require('../utils/utils')
const GithubStrategy = require('passport-github2').Strategy;


passport.use(new GithubStrategy({
    clientID: "Iv1.4222d2e4c70cba07",
    clientSecret: "42f940875465b467b155bce7bf12e3b31e84fbde",
    callbackURL: "http://localhots:8080/api/session/github/callback"
},
async(accesToken, refreshToke, profile, done)=>{
    try {
        console.log(profile);
    } catch (error) {
        done(error)
    }
}))