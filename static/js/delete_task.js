let deleteTaskListner = function(event){
    // XHR request to toggle status in the DB
    // Apply lime green to background to mark it done
    console.log(event.currentTarget.id);
    // toggleStatus();
    // markItDone();
    deleteTask(event.currentTarget.id)
    
}




function deleteTask(task_id){
//delete-task_id
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
    $(`#${data.card_id}`).remove();
  }
});
}
const deletebuttons = document.querySelectorAll('.fa-trash');
for(let i=0;i<deletebuttons.length;i++)
{
deletebuttons[i].addEventListener('click',deleteTaskListner)  
}