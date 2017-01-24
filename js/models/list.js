'use strict';
// List Model
var listIndex = -1
var allLists = []
function List(title){
  this.title = title
  this.id = listIndex ++
  this.tasks = []
  allLists.push(this)


}

List.all = allLists
