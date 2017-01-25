'use strict';
// Task Model
function Task(description, priority, list){
  this.description = description
  this.priority = priority
  this.list = list
  this.id = list.tasks.length
  this.list.tasks.push(this)
}


Task.prototype.liEl = function() {
  return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
}

Task.prototype.build = function() {
  // should this check for whether the ul has been created? or is that the list's responsibility? soon we will see!
  $(`#list-${this.list.id}`).append(this.liEl())
}

Task.prototype.destroy = function (div) {
  div.remove()
  // Each instance of a list contains an array of all the tasks associated
  // to that specific list
  // We want to remove the task from that list List.tasks
  this.list.tasks[this.list.tasks.indexOf(this)] = null
}
