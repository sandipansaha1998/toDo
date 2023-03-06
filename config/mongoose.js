const mongoose = require('mongoose');

console.log("Mongoose working")



// Connect to the database
mongoose.connect('mongodb://localhost/tasks');


//  aquire the connection to check if the connection is succesfull
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Connectrion Error'));
db.once('open',function(){
    console.log('Succesfully connected to the database');
})