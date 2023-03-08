
const express = require('express');
const port = 8000;
const app = express();
const methodOverride = require('method-override');


// schema definition and model creation
const db_schema = require('./config/mongoose');

//Model Instance
const tasks_db = require('./models/tasks')
// Middleware to override method
app.use(methodOverride('_method'));

app.disable('etag'); // disable caching of GET requests
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());
app.use(express.json());
app.use('/',require('./routers'));


app.use(express.static('static'));






app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Server Failed to start . Error Encountered : ${err} `);
        return;
    }

    console.log(`Server started succesfully`);
})


