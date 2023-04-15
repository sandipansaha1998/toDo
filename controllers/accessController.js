const User = require('../models/user');

module.exports.createSession =  function(req,res)
{
   
//    req.flash('success','Logged in Successfully');
   return res.redirect('/');
}

module.exports.destroySession = function(req,res)
{
  
    req.logout(function(err){
        if (err) { console.log(err); return; } 
        // req.flash('success','Logged out');
        return res.redirect('/login');
      });
    
    
};

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

