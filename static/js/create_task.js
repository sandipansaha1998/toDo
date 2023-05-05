// Method to add new task to the DOM
let newTaskDOM = function(task){
//    If task-category is not empty
    if(task.category)
    {
        return $(`<div class="card m-2" id="card-${task._id}">
        <div class="card-body text-start">
    
            <h5 class="card-title"><span class="badge rounded-pill bg-dark ">
                    ${task.category}
                </span><i id="delete-${task._id}" class="fa-solid fa-trash float-end"></i> </h5>
    
            <p class="card-text">
                ${task.title}
            </p>
            <input type="checkbox" class="float-end checkbox-round" id="${task._id}">
            <i class="fa-regular fa-flag m-1"></i><span class="">
                ${task.due_date}
            </span>
    
        </div>
    </div>`)
    }
    // Task-category is empty
    else
    {
        return $(`<div class="card m-2" id="card-${task._id}">
        <div class="card-body text-start">
    
            <h5 class="card-title">
            <i id="delete-${task._id}" class="fa-solid fa-trash float-end"></i> 
            </h5>
    
            <p class="card-text">
                ${task.title}
            </p>
            <input type="checkbox" class="float-end checkbox-round" id="${task._id}">
            <i class="fa-regular fa-flag m-1"></i><span class="">
                ${task.due_date}
            </span>
    
        </div>
    </div>`)
    }
 
 }
 

// Method to append task to corresponding segment based on due date
let addTaskToSegment = function(taskDom,segment){
    console.log($(`#${segment}`));
    $(`#${segment}`).append(taskDom);
    
}
// Method to submit the form data for new task
let create_task = function(e){
    e.preventDefault();
    let new_task_form = $('#create-task-form');
    let taskTitle = document.querySelector('#task-title');
    let taskDate = document.querySelector('#task-date');
    document.querySelector('#title-empty-error').classList.add('d-none');  
    document.querySelector('#invalid-date-error').classList.add('d-none');   
    // Making task title a required feild.if empty the ajax request is not made
    if(!taskTitle.value)
    {
        document.querySelector('#title-empty-error').classList.remove('d-none');
        return;
    }
    // Checking Date format.if invalid the ajax request is not made
    if(!taskDate.value)
    {
        document.querySelector('#invalid-date-error').classList.remove('d-none');
        return;
    }
    // Toggled the create task modal
    var myModalEl = document.querySelector('.modal')
    var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
    modal.toggle();
    $.ajax({
            type: "post",
            url: "/task/create",
            data: new_task_form.serialize(),
            success: function (data) {
                console.log("Success");
                new Noty({
                    theme: 'metroui',
                    text: '<i class="fa-solid fa-circle-check me-1"></i>Task Created',
                    type: 'success',
                    layout: 'topRight',
                    timeout: 1500
                }).show();
                // Creating new task
                let new_taskDOM = newTaskDOM(data.data.task);
                // Adding Listners to toggle checkbox and delete button
                new_taskDOM.find('input[type="checkbox"]').get(0).addEventListener('change', toggleStatusListner);
                new_taskDOM.find('.fa-trash').get(0).addEventListener('click',deleteTaskListner);
                // Added to DOM
                addTaskToSegment(new_taskDOM,data.data.segment);
                // reseting the create task form
                $('#create-task-form')[0].reset();
                // Sets the due date of the create task form to today for quick to do list
                setToToday();
            },
            error:{
                function (err) {console.log(err)}
            }
        });
}


// Method to add listners to toggle status and delete button
let delete_task = function(inputTag,deleteButton){

}
// Adding Listner to the submit button
let newTaskSubmit = document.querySelector('#create-task-form-submit');
newTaskSubmit.addEventListener('click',create_task);