'use strict';
// Task Model
function Task(description, priority, list){
  this.description = description
  this.priority = priority
  this.id = list.tasks.length
  list.tasks.push(this)
  this.list = list
  debugger

}
