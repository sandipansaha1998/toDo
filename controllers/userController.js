const User = require('../models/user');
const mailer = require('../mailers/resetPassword');
const resetPasswordMailer = require('../worker/reset_password_email_worker');
const kue = require('../config/kue');
const queue = require('../config/kue');
const bcrypt = require('bcrypt');
const saltRounds = 10;





// New User Registration
module.exports.create = async function(req,res)
{ 
    // hashing the password   
 
    try{
        let hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        let newUser = {
            email:req.body.email,
            password:hashedPassword,
            name:req.body.name,
            resetPasswordLinkTime:Date.now()
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
            req.flash('error',' Passwords dont match');
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
        let user = await User.findOne({email:req.body.email});
        console.log(user)
        if(!user){
            req.flash('error','No emails found!!')
            res.redirect('back');
        }
        else{
            // Setting Validity of link
            user.resetPasswordLinkTime = Date.now();
            user.save();
            // Send Password Reset Link
            // mailer.resetPasswordLink(user);
            
            queue.create('emails',user).save(function (err) {
                if(err){
                    console.log("Error in sending job to queue",err);
                }
              })
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
        let hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        user.password = hashedPassword;
        user.save();
            req.flash('success','Password Reset Successful');
            return res.redirect('/login')
        }

    }catch(e){
        console.log(e);
    }
   
    } 