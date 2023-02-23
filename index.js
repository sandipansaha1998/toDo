const express = require('express');
const port = 8000;
const app = express();


app.use('/',require('./routers'));
app.set('view engine','ejs');
app.set('views','./views');





app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Server Failed to start . Error Encountered : ${err} `);
        return;
    }

    console.log(`Server started succesfully`);
})