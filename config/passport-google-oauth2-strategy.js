const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


passport.use(new googleStrategy({
    clientID:'674660657407-64qs4ll5qd0bktdg4isov4ncap2aqsrm.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:8000/user/auth/google/callback'
},
    function(accessToken,refreshToken,profile,done){
        console.log('Inside callback')
        // Find the user 
        User.findOne({email:profile.emails[0].value}).then(user =>{
            if(user)
            // if found,set this user as req.user
                return done(null,user);
            else
            {
            // Create the user and then set this as req.user 
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                }).catch(err=>{
                    console.log('Error in creating a new user',err);
                    return
                }).then(user=>{
                    return done(null,user);
                })
                
            }
        }).catch(err => {
            console.log('Error in google strategy',err);
        })
    }
))

module.exports = passport;