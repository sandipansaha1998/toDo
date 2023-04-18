let toggleStatusListner = function(event){
        // XHR request to toggle status in the DB
        // Apply lime green to background to mark it done
        console.log(event.currentTarget.id);
        // toggleStatus();
        // markItDone();
        toggleStatus(event.currentTarget.id)
        if(event.currentTarget.checked == true)
    {   
        // event.currentTarget.parentElement.nextElementSibling.style.textDecoration="line-through";
        console.log('asd')
    }
    else
    {
        // event.currentTarget.parentElement.nextElementSibling.style.textDecoration="";
        console.log('asd')
    }
    }


function toggleStatus(task_id){
   $.ajax({
    type: "POST",
    url: "/task/toggle",
    data: {
        task_id:task_id,
    },
    success: function(data){
        console.log(data.card_id)
        if($(`#${data.card_id}`).hasClass('checked'))
        {
            $(`#${data.card_id}`).removeClass('checked')
        }
        else
            $(`#${data.card_id}`).addClass('checked');
    }
   });

}
const checkedInputs = document.querySelectorAll('input[type="checkbox"]');
for(let i=0;i<checkedInputs.length;i++)
{
    checkedInputs[i].addEventListener('change',toggleStatusListner)
      
}