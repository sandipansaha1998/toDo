
// Acts as a middleware and sets flash object to the response object 

module.exports.setFlash = function(req,res,next){
   
    res.locals.flash = {
     'success':req.flash('success'),
     'error':req.flash('error')
    }
    
    
    next(); 
 }