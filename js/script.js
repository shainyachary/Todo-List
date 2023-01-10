var taskName = document.getElementById('taskName');
var taskDate = document.getElementById('taskDate');
var taskDesc = document.getElementById('taskDesc');
var taskList = document.getElementById('taskList');
count = 0;
document.querySelector('#addTask').addEventListener('click',()=>
{
    if(taskName.value == '' || taskDate.value == '' || taskDesc.value == '')
    {
        alert('Please enter the task....');
    }
    else
    {
        count++;
        taskList.innerHTML += '<li class="task" id="task'+count+'"><div class="content"><input type="checkbox" id="check'+count+'" onchange="changeStatus('+count+')"><span class="text" id="text'+count+'">'+taskName.value+'</span></div><span class="date" id="date'+count+'">'+taskDate.value+'</span><span class="desc" id="desc'+count+'">'+taskDesc.value+'</span><div class="icon"><i class="fas fa-trash" onclick="removeTask('+count+')"></i></div></li>';
        taskName.value = taskDate.value = taskDesc.value = '';
    }
});
function changeStatus(id)
{
    var status = document.getElementById("check"+id).checked;
    var taskTitle = document.getElementById("text"+id);
    var taskDate = document.getElementById("date"+id);
    var desc = document.getElementById("desc"+id);
    var task = document.getElementById('task'+id);
    taskTitle.style.textDecoration = taskDate.style.textDecoration = desc.style.textDecoration = status ? 'line-through' : 'none';
    task.style.backgroundColor = status ? 'lightgreen':'#e2dbdb';
}
function removeTask(id)
{
    var flag = confirm("Are you sure want to delete this task ? ");
    flag ? document.getElementById("task"+id).remove(): " ";
}
