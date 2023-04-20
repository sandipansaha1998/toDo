const User = require('../models/user');

// After Passport and express session creates USER session , it is redirected to HOME
module.exports.createSession =  function(req,res)
{
   
   req.flash('success','Logged in Successfully');
   return res.redirect('/');
}
// Logs Out the User
module.exports.destroySession = function(req,res)
{

    req.logout(function(err){
        if (err) { console.log(err); return; } 
        req.flash('success','Logged out');
        return res.redirect('/login');
      });
    
    
};
// Renders the Login Page
module.exports.renderLogin = function (req,res) {
    if(req.isAuthenticated())
    {   
        return res.redirect('/');
    }

    return res.render('login',{
        title:'TaskGrid|Login',
        layout:'access_layout'
    })
}
// Renders the Sign Up Page
module.exports.renderSignUp = function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    return res.render('signup',{
        title:'Socialise|Login',
        layout:'access_layout'
    })
}

module.exports.renderConfirmEmail = function(req,res){
    return res.render('./reset_password/confirm_email',{
        title:'TaskGrid|Confirm Your Email',
        layout:'access_layout'
    })
}

module.exports.renderResetPasswordForm = function(req,res){
    return res.render('./reset_password/reset_pass_form',{
        title:'TaskGrid|Reset',
        user_id:req.params.id,
        layout:'access_layout'
    })
}


        