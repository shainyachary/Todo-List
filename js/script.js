var taskName = document.getElementById('taskName');
var taskDate = document.getElementById('taskDate');
var taskDesc = document.getElementById('taskDesc');
var taskList = document.getElementById('taskList');
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
        taskList.innerHTML += '<li class="task" id="task'+count+'"><input type="checkbox" id="check'+count+'" onchange="changeStatus('+count+')"><div class="content"><span id="text'+count+'">'+taskName.value+'</span><span class="small text-secondary" id="date'+count+'">'+taskDate.value+'</span><span id="desc'+count+'">'+taskDesc.value+'</span></div><div class="icon"><i class="fas fa-trash" onclick="removeTask('+count+')"></i></div></li>';
        taskName.value = '';
        taskDate.value = '';
        taskDesc.value = '';
    }
});
function changeStatus(id)
{
    var status = document.getElementById("check"+id).checked;
    var taskTitle = document.getElementById("text"+id);
    var taskDate = document.getElementById("date"+id);
    var desc = document.getElementById("desc"+id);
    taskTitle.style.textDecoration = status ? 'line-through' : 'none';
    taskDate.style.textDecoration = status ? 'line-through' : 'none';
    desc.style.textDecoration = status ? 'line-through' : 'none';
}
function removeTask(id)
{
    var flag = confirm("Are you want to delete this task ? ");
    flag ? document.getElementById("task"+id).remove(): " ";
}

// taskList.innerHTML += '<div class="task" id="task'+count+'"><input type="checkbox" id="check'+count+'" onchange="changeStatus('+count+')"> <span id="text'+count+'">'+taskName.value + '</span> <input type="button" onclick="removeDiv('+count+')" value="X" /></div><br>';