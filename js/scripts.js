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
let toDoList 
$(document).ready(function() {
  $("form#add-task").submit(function(event) {
    event.preventDefault();
    const inputTask = $("input#new-task").val();
    let newTask = new Task(inputTask);
    ToDoList.addTask
  });