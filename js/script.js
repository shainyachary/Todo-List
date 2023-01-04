var taskName = document.querySelector('#taskName');
var taskList = document.querySelector('#taskList');
count = 0;
document.querySelector('#addTask').addEventListener('click',()=>
{
    if(taskName.value == '')
    {
        alert('Please enter the task....');
    }
    else
    {
        count++;
        taskList.innerHTML += '<li id="task'+count+'" class="task">'+taskName.value+'<span class="icon"><i class="fas fa-trash" onclick="removeTask('+count+')"></i></span></li>';
        taskName.value = '';
    }
});
function removeTask(id)
{
    document.getElementById('task'+id).remove();
}