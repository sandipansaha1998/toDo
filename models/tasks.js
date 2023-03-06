const mongoose = require('mongoose');

console.log("Models workings")
//Schema Definition
const tasksSchema = new mongoose.Schema({
    title:{
        type:String,
        // required:true
    },
    description:{
        type:String,
        // required:true
    },
    category:{
        type:String,
        // required:true
    },
    due_date:{
        type:Date,
        // required:true
    },
    status:{
        type:Boolean,
        // required:true
    }

});




//Model Definition
const tasks_db= mongoose.model('Tasks',tasksSchema);
module.exports = tasks_db;