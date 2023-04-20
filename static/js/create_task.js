// Method to add new task to the DOM
let newTaskDOM = function(task){
   
    return $(`<div class="card m-2" id="card-${task._id}">
    <div class="card-body text-start">

        <h5 class="card-title"><span class="badge rounded-pill bg-dark ">
                ${task.category}
            </span><i id="delete-${task._id}" class="fa-solid fa-trash float-end"></i> <i
                class="fa-regular fa-pen-to-square float-end me-3"></i></h5>

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
 

// Method to append task to corresponding segment based on due date
let addTaskToSegment = function(taskDom,segment){
    console.log($(`#${segment}`));
    $(`#${segment}`).append(taskDom);
    
}
// Method to submit the form data for new task
let create_task = function(){
    console.log('click')
    let new_task_form = $('#create-task-form');
    $.ajax({
            type: "post",
            url: "/task/create",
            data: new_task_form.serialize(),
            success: function (data) {
                console.log("Success")
                let new_taskDOM = newTaskDOM(data.data.task);
                // Adding Listners to toggle checkbox and delete button
                new_taskDOM.find('input[type="checkbox"]').get(0).addEventListener('change', toggleStatusListner);
                new_taskDOM.find('.fa-trash').get(0).addEventListener('click',deleteTaskListner);
                // Added to DOM
                addTaskToSegment(new_taskDOM,data.data.segment);
                $('#create-task-form')[0].reset();
            },
            error:{
                function (err) {console.log(err)}
            }
        });
}





















// Method to add listners to toggle status and delete button
let delete_task = function(inputTag,deleteButton){

}
let newTaskSubmit = document.querySelector('#create-task-form-submit');
newTaskSubmit.addEventListener('click',create_task);