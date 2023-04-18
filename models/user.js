const mongoose = require('mongoose');


//Schema Definition

const tasksSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tasks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Task'
        }
    ],
    categories:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category'
        }
    ]
},{
    timestamps:true
});




//Model Definition
const tasks_db= mongoose.model('User',tasksSchema);
module.exports = tasks_db;