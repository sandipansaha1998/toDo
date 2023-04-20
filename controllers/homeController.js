const User = require('../models/user');
const Task = require('../models/task');
const dateToday = require('./today')
// Home Route
module.exports.home = async function(req,res){
    try{

    // Tasks are divided into arrays based on due date
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
            task.due_date = task.due_date.toDateString(); // Converts ISO TIME to "weekday mmm DD YYYY" format
            past_tasks.push(task);  
        }
        else if(task.due_date>dateToday.upper_limit){
            task.due_date = task.due_date.toDateString(); // Converts ISO TIME to "weekday mmm DD YYYY" format
            upcoming_tasks.push(task);
        }
        else{
            task.due_date = task.due_date.toDateString();// Converts ISO TIME to "weekday mmm DD YYYY" format
            today_tasks.push(task);
        }
    }
    // Renders 'Home' with layout 'Layout'
    // Task Arrays were divided and sent with the response object
    return res.render('home',{
        title:'home',
        layout:'layout',
        today_tasks:today_tasks,
        upcoming_tasks:upcoming_tasks,
        past_tasks:past_tasks
        })
     }catch(err){
        console.log('Error in rendering home',err);
        return;
}
};