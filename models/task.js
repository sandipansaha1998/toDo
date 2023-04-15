const mongoose = require('mongoose');

//Schema Definition

const tasksSchema = new mongoose.Schema({
    title:{
        type:String,
        // required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
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

},{
    timestamps:true
});




//Model Definition
const tasks_db= mongoose.model('Tasks',tasksSchema);
module.exports = tasks_db;