// Sets the form date to current date for quick additon of task for that day

function setToToday ()
{
    const dateInput = document.getElementById('task-date');

    // Create a new Date object for today's date
    const today = new Date();
    
    // Format the date as a string in ISO 8601 format
    const todayString = today.toISOString().slice(0, 10);
    
    // Set the default value of the date input field to today's date
    dateInput.value = todayString;
    
}
setToToday();