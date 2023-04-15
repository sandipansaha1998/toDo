const User = require('../models/user');

module.exports.create = async function(req,res)
{    

    let newUser = {
        email:req.body.email,
        password:req.body.password,
        name:req.body.name
    }

    if(req.body.password == req.body.confirm_passoword)
    {
    const createUser = await User.create(newUser).then(
        newUser => 
        {
            // req.flash('success','User Successfully Created');
            return res.redirect('/login');
        })
        .catch(error=>{
            // req.flash('error',error);
            console.log(error)
            return res.redirect('back');
        });  
    }
    else
    {
        console.log("Passwords dont match")
        return res.redirect('/sign-up');
    }
}