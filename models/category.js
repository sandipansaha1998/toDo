const mongoose = require('mongoose');

//Schema Definition

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    color:{
        type:String,
        // required:true
    },

},{
    timestamps:true
});




//Model Definition
const category= mongoose.model('Category',categorySchema);
module.exports = category;