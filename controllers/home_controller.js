const User = require('../models/user');
const Task = require('../models/task');
const Category = require('../models/category');
const dateToday = require('../controllers/today')
// Home Route
module.exports.home = async function(req,res){
    try{
    let today_tasks = new Array();
    let upcoming_tasks = new Array();  
    let past_tasks = new Array();
    


    let tasks = await Task.find({
        user:req.user.id
    });
    
    for(let task of tasks)
    {
        task = task.toJSON();
        if(task.due_date<dateToday.lower_limit)
        {
            task.due_date = task.due_date.toDateString();
            past_tasks.push(task);  
        }
        else if(task.due_date>dateToday.upper_limit){
            task.due_date = task.due_date.toDateString();
            upcoming_tasks.push(task);
        }
        else{
            task.due_date = task.due_date.toDateString();
            today_tasks.push(task);
        }
    }

    return res.render('home',{
        title:'home',
        layout:'layout',
        today_tasks:today_tasks,
        upcoming_tasks:upcoming_tasks,
        past_tasks:past_tasks
        })
}catch(err){
    console.log(err);
    return;
}
};