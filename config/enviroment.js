const path = require('path');

// Development Mode Properties
const development = {
    name:'development',
    asset_path:'/static' ,
    session_cookie_key:'crunchy',
    db:'taskgrid_development',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'socialise.india.web@gmail.com',
            pass:'bzvukndojhtxacyh'
        }
    }
}
// production Mode Properties
const production = {
    name:'production',
    asset_path:process.env.TASKGRID_ASSET_PATH ,
    session_cookie_key:process.env.TASKGRID_SESSION_COOKIE_KEY,
    db:process.env.TASKGRID_DB,
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.TASKGRID_EMAIL,
            pass:process.env.TASKGRID_PASS
        }
    }
}

module.exports = eval(process.env.TASKGRID_ENVIROMENT) == undefined ? development:production;

