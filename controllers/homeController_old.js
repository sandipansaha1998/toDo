//Model Instance
const Tasks = require('../models/task');
const category =require('../models/category.json');



// Query for retreieving the records 
let getTask = async ()=> {
    
    const query = await Tasks.find().sort([['due_date', 1]]).exec();
    return query;
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
    console.log(newTask.due_date)
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
module.exports.update_task = async function(req,res){
    const id = req.body.taskId
    Tasks.findOneAndUpdate({_id:id},{
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        due_date: new Date(req.body.due_date),
    },{
        assert:true
    }).then();
    return res.redirect('back');

}

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

//   Delete Task

module.exports.delete_task = async function (req,res) {
    console.log(req.query.id);
    Tasks.findByIdAndDelete(req.query.id,function(err){
        if(err)
        console.log("Error in deleting an object from the database");
    })
        return res.redirect('back');
};


  








