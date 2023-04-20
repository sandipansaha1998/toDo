const User = require('../models/user');
const mailer = require('../mailers/resetPassword');
// New User Registration
module.exports.create = async function(req,res)
{    
    try{
        let newUser = {
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        }
        if(await User.findOne({email:newUser.email}))
        {
            req.flash('error','Email Already Registered.');
            return res.redirect('back')
        }
        if(req.body.password === req.body.confirm_password)
        {
        const createUser = await User.create(newUser).then(
            newUser => 
            {
                req.flash('success','User Successfully Created');
                return res.redirect('/login');
            })
      
        }
        else
        {
            req.flash('error','Passwords dont match');
            return res.redirect('/sign-up');
        }
    }catch(e){
        
            console.log(e)
            return;
    }
    
}

// Sends Reset Password Link
module.exports.sendResetPasswordLink = async function(req,res){
    try{
        console.log(req.body.email)
        let user = await User.findOne({email:req.body.email});
        console.log(user);
        if(!user){
            req.flash('error','No emails found!!')
            res.redirect('back');
        }
        else{
            // Send Password Reset Link
            mailer.resetPasswordLink(user);
            req.flash('success','Reset Link Sent to Registered Email')
            res.redirect('/login')
        }
    }catch(e){
        console.log(e);
    }
   
}
// Reset Password
module.exports.resetPassword = async function(req,res){
    console.log("************************")
    console.log(req.body)
    try{
        if(req.body.password != req.body.confirm_password)
        {
            console.log("Does not match")
            req.flash('error','Passwords dont Match');
            res.redirect('back')
        }    
        else
        {
        let user = await User.findById(req.body.user_id);
        user.password = req.body.password;
        user.save();
            req.flash('success','Password Reset Successful');
            return res.redirect('/login')
        }

    }catch(e){
        console.log(e);
    }
   
    } 