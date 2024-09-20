const todoInput = document.getElementById("todo-input");
const tasksList = document.getElementById("tasks-list");
function addTask() {
    if (todoInput.value === '') {
        alert("Enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;
        tasksList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    todoInput.value="";
    saveTasks();
}

tasksList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks(){
    localStorage.setItem("data", tasksList.innerHTML);
}

function showStoredTasks(){
    tasksList.innerHTML = localStorage.getItem("data");
}

showStoredTasks();