let deleteTaskListner = function(event){
    // XHR request to toggle status in the DB
    // Apply lime green to background to mark it done
    console.log(event.currentTarget.id);
    // toggleStatus();
    // markItDone();
    deleteTask(event.currentTarget.id)
    
}




function deleteTask(task_id){
//Deletes the task with id:task_id
// On success removes the related task card from DOM
task_id = task_id.split('-')[1]; 
$.ajax({
type: "GET",
url: "/task/delete",
data: {
    task_id:task_id,
},
success:function (data) {
    console.log("success")
    console.log($(`#${data.card_id}`))
    new Noty({
        theme: 'metroui',
        text: '<i class="fa-solid fa-trash"></i>Task Deleted',
        type: 'success',
        layout: 'topRight',
        timeout: 1500
    }).show();
    // associated task card removed
    $(`#${data.card_id}`).remove();
  }
});
}
// Adding Listners to delete buttons
const deletebuttons = document.querySelectorAll('.delete-button');
for(let i=0;i<deletebuttons.length;i++)
{
deletebuttons[i].addEventListener('click',deleteTaskListner)  
}