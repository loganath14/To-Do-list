const input = document.getElementById("task");
const button = document.getElementById("add-task");
const list = document.getElementById("display-lists");


let tasks = [];
let id = 0;
button.addEventListener("click", function () {
    const task = input.value
    if (task) {
        tasks.push({ id: id, task: task });
        id++;
        input.value = "";
        displayTasks();
    }
    else {
        alert("Please enter a task");
    }
});
function displayTasks() {
    list.innerHTML = "";
    tasks.forEach(function (task) {
        const li = document.createElement("li");//html li tag create
        li.textContent = task.task;
        li.id = task.id;
        const deleteButton = document.createElement("button");//html delete tag create
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteTask(task.id);
        }
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}


function deleteTask(taskId) {
    // Filter out the task with the given id
    tasks = tasks.filter(task => task.id !== taskId);
    // Update the displayed tasks
    displayTasks();
}


