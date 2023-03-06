//Model Instance
const Tasks = require('../models/tasks');
const category =require('../models/category.json');



// Query for retreieving the records 
let getTask = async ()=> {
    
    const query = await Tasks.find().exec();
    return query;
};


// Home Route
module.exports.home = async function(req,res){
    
    let today_tasks = new Array();
    let pending_tasks = new Array();
    let upcoming_tasks = new Array();

    // Current Date 
    let dateToday={};
    dateToday.lower_limit = new Date().setHours(0,0,0,0);
    dateToday.upper_limit = new Date().setHours(23, 59, 59, 999);



    let tasks = await getTask();
  
    for(let task of tasks)
    {
        task = task.toJSON();
        if(task.due_date<dateToday.lower_limit)
        {
            task.due_date = task.due_date.toDateString();
            pending_tasks.push(task);
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
        upcoming_tasks:upcoming_tasks,
        today_tasks:today_tasks,
        pending_tasks:pending_tasks,
        category:category,    
    })
};


// add-task
module.exports.addTask = function(req,res){
    console.log("---",req.body);
    let newTask = {
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        due_date: new Date(req.body.due_date),
        status:false
    };
    Tasks.create(newTask,function(err,newTask)
    {
        if(err){
            console.log('Error in creating a contact---',err);
            return;
               }

        // console.log('*********');
        return res.redirect('back');
    });

}


// Task to find one and update

//update task-status
module.exports.update_task_status = async function (req,res) {
    let taskIDS = new Array();
    for(let key of Object.keys(req.body)){
        taskIDS.push(key.split("_")[2].substring(1));
    }
    for (let id of taskIDS)
    {
        console.log(id);
        Tasks.findOneAndUpdate({ _id: id},{status:true},{
            assert:true
        }).then();
        
    }
    return res.redirect('back');

  }








