
// Input Validity Checks
let isEmpty = function isEmpty(value)
{
    if(!value)
    return true;
    return false;
}

submitButton = document.querySelector("input[type = 'submit']");
submitButton.addEventListener('click',function(event){
    event.preventDefault();
    let inputFeilds = document.querySelectorAll("#add-task input");
    for(let i=0;i<inputFeilds.length-1;i++)
    {
        console.log(inputFeilds[i].value);
        if(isEmpty(inputFeilds[i].value))
        {
        alert(`${inputFeilds[i].name} Cannot be Empty`);
            return;
        }
    }
    document.querySelector("#add-task-form").submit();


})






// Edit panel 
var editButtonArray = document.querySelectorAll(".edit-button");
var editPanelArray = document.querySelectorAll(".card-edit-panel");
var cancelArray = document.querySelectorAll(".cancel");
var cardDisplayArrayUpper = document.querySelectorAll(".card-upper-panel");
var cardDisplayArrayLower = document.querySelectorAll(".card-lower-panel");


for(let i=0;i<editButtonArray.length;i++)
{
editButtonArray[i].addEventListener('click',function(event)
{
    event.preventDefault();
    editPanelArray[i].classList.remove("hide");
    editButtonArray[i].classList.add("hide");
    cardDisplayArrayUpper[i].classList.add("hide");
    cardDisplayArrayLower[i].classList.add("hide");

    

});
cancelArray[i].addEventListener('click',(event)=>{
    event.preventDefault();
    editPanelArray[i].classList.add("hide");
    editButtonArray[i].classList.remove("hide");
    cardDisplayArrayUpper[i].classList.remove("hide");
    cardDisplayArrayLower[i].classList.remove("hide");

    });
}

// Marking it complete

const checkedInputs = document.querySelectorAll('input[type="checkbox"]');
// const titles = document.querySelectorAll('');
for(let i=0;i<checkedInputs.length;i++)
{
    checkedInputs[i].addEventListener('change',()=>{
        if(checkedInputs[i].checked == true)
    {   
        checkedInputs[i].parentElement.nextElementSibling.style.textDecoration="line-through";
    }
    else
    {
        checkedInputs[i].parentElement.nextElementSibling.style.textDecoration="";

    }
    })
}

// Swtiching Tabs
// let toggleTabsButton = document.querySelectorAll(".tab-controller button");
// let taskStatusArray = new Array();

// for(let i of toggleTabsButton)
// {
//     taskStatusArray.push(i.innerText.toLowerCase());
// }
// let toggleTabs = function(event)
// {
//     let taskStatus = event.currentTarget.innerText.toLowerCase();
//     document.getElementById(taskStatus).style.display='block';
//     for(let i of taskStatusArray)
//     {
//         if(i!=taskStatus)
//         {
//             document.getElementById(i).style.display='none';
//         }
//     }

// }

// for(let i of toggleTabsButton)
// {
// i.addEventListener('click',toggleTabs);
// }


// Before Closing Alert

const buListner = (event) => {
    event.preventDefault();
    return event.returnValue = '';
};

window.addEventListener("click",(event) =>{
    
        addEventListener("beforeunload",buListner);  
    //    removeEventListener("beforeunload",buListner);
});


// Form Submission for task completion status
const taskCompletionForm = document.querySelector("#task-completion-form");
const completionCheckBoxes = document.querySelectorAll(".completion-checkbox");
// save-button
const saveButton = document.querySelector(".save-button");
saveButton.addEventListener('click',function () {
    console.log("Clicked");
    window.alert("Click on okay to save");
    taskCompletionForm.submit();
  })