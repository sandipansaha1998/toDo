// Calls toggle status on change of checkbox state
let toggleStatusListner = function(event){
        toggleStatus(event.currentTarget.id)
    }


function toggleStatus(task_id){
   $.ajax({
    type: "POST",
    url: "/task/toggle",
    data: {
        task_id:task_id,
    },
    success: function(data){
        // toggles task status
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