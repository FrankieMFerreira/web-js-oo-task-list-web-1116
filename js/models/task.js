'use strict';
// Task Model
function Task(description, priority, list){
  this.description = description
  this.priority = priority
  this.id = list.tasks.length
  list.tasks.push(this)
  this.list = list
}


Task.prototype.liEl = function() {
  return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
}

Task.prototype.build = function() {
  // should this check for whether the ul has been created? or is that the list's responsibility? soon we will see!
  $(`#list-${this.list.id}`).append(this.liEl())
}
