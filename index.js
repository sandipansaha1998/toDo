// Express
const express = require('express');
const port = 8000;
const app = express();
// Authentication
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
// For Sessions which allow Authenticated users to stay signed in for the mentioned period
const session = require('express-session');
const MongoStore =  require('connect-mongo');
// Using layouts
const expressLayouts = require('express-ejs-layouts');
// Database Connection
const db_connection = require('./config/mongoose');
// Flash Middleware
const flash = require('connect-flash');
const customMware = require('./config/flashMiddleware');




// Using static files
app.use(express.static('static'));

// Using Layouts
app.use(expressLayouts);

// Extarct styles and scripts from subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// Setting views 
app.set('view engine','ejs');
app.set('views','./views');

//  express-session
app.use(session({
    name:'taskgrid',
    // TODO change the secrect before deployment
    secret:'taskgrid',
    saveUninitialized:true,
    resave:true,
    cookie:{
        maxAge:(100*60*100)
    },
    store:new MongoStore(
        {
            mongoUrl:`mongodb://localhost/task_grid_development`
        }
    )
}));

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());
app.use(passportLocal.setAuthenticatedUser);//Middleware which passes on the user{}


// Parsers
app.use(express.urlencoded());
app.use(express.json());
// Conenct Flash instance
app.use(flash());
app.use(customMware.setFlash);

// Routes
app.use('/',require('./routes'));



// Server
app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Server Failed to start . Error Encountered : ${err} `);
        return;
    }

    console.log(`Server started succesfully`);
})


