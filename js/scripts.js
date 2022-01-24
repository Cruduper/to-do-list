//Bus.logic for To Do List
function ToDoList() {
  this.taskList = {};
  this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.giveId();
  this.taskList[task.id] = task;
};

ToDoList.prototype.giveId = function()  {
  this.currentId += 1;
  return this.currentId;
};

ToDoList.prototype.findTask = function(id) {
  if (this.taskList[id] != undefined) {
    return this.taskList[id];
  }
  else {
    return false;
  }
};

ToDoList.prototype.deleteTask = function(id)  {
  if (this.taskList[id] === undefined)  {
    return false;
  } 
  else {
    delete this.taskList[id];
    return true;
  }
};

ToDoList.prototype.completedTask = function(id) {
  this.taskList[id].status = "completed";
};

//Business logic for task
function Task(name) {
  this.name = name;
  this.status = "incomplete"; //default task as incomplete
} 

//UI logic
let toDoList = new ToDoList();

function displayTaskList(toDoListToDisplay) {
  let taskListOutput = $("ul#task-list");
  let htmlForTaskInfo = "";
  Object.keys(toDoListToDisplay.taskList).forEach(function(key) {
    const task = toDoListToDisplay.findTask(key);
    htmlForTaskInfo += "<li id=" + task.id + ">" + task.name + " " + task.status + "</li>";
  });
  taskListOutput.html(htmlForTaskInfo);
}

$(document).ready(function() {
  $("form#add-task").submit(function(event) {
    event.preventDefault();
    const inputTask = $("input#new-task").val();
    let newTask = new Task(inputTask);
    toDoList.addTask(newTask);
    displayTaskList(toDoList);
  });
});