const User = require('../models/user');
const bcrypt = require('bcrypt');
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
        title:'TaskGrid|Sign Up',
        layout:'access_layout'
    })
}
// Renders confirm email page for password reset link
module.exports.renderConfirmEmail = function(req,res){
    return res.render('./reset_password/confirm_email',{
        title:'TaskGrid|Confirm Your Email',
        layout:'access_layout'
    })
}
//  Renders Password Reset Form for that particular User
module.exports.renderResetPasswordForm = async function(req,res){
    let user = await User.findById(req.params.id);
    if(user)
    {
        console.log(Date.now() - user.resetPasswordLinkTime)
        // Checking Expiry
        if(Date.now() - user.resetPasswordLinkTime < 300000){
            return res.render('./reset_password/reset_pass_form',{
                title:'TaskGrid|Reset',
                // User id is fetched from the url
                user_id:req.params.id,
                layout:'access_layout'
            })
        }
        else{
            res.status(404).send('<h1>Link has expired</h1>');
        }
    }



   
}


        