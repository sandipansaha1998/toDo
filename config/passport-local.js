const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt')
// Authentication Using Local Startegy
passport.use(new LocalStrategy({
    usernameField:'email',
    passReqToCallback:true
},
async function(req,email,password,done){ // Callback function 
    await User.findOne({email:email})
    .then(async (user)=>{
        if(!user)
            {
            req.flash('error','Email Not registered');
            return done(null,false);
            }
        console.log(user.password+" "+password)
        let isCorrect = await bcrypt.compare(password, user.password);
        console.log(isCorrect)
        if(!isCorrect)
        {
            req.flash('error','Incorrect Username/Password');
            return done(null,false);
        }
        return done(null,user);
    }
    ).catch(err => {console.log(err);return})
}
));

// serialization
passport.serializeUser(function(user,done){
    done(null,user._id);
})
// deserialization
passport.deserializeUser(async function(userID,done){
    const userInfo = await User.findById(userID).then(users => {return users}).catch(err=>{console.log("Error in finding the user");return done(err)});
    return done(null,userInfo);
});

// Middleware to check Authentication
passport.checkAuthentication = function(req,res,next){
    // if the user is signed in,then  next middleware is called
    if(req.isAuthenticated())
        return next();
    
    // if not signedIn,then rediredted to login page
    return res.redirect('/login');
}
passport.setAuthenticatedUser = function (req,res,next) {
    // user is extracted and set to the locals for access

    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
  }


module.exports = passport;