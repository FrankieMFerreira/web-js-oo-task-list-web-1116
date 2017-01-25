'use strict';
// List Model
var allLists = []
function List(title){
  this.title = title
  this.id = List.all.length
  this.tasks = []
  allLists.push(this)

}

List.all = allLists

List.prototype.listEl = function() {
  return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`
}

List.prototype.optionEl = function() {
  return `<option value="${this.id}">${this.title}</option>`
}

List.prototype.build = function () {
  $(`#lists`).append(this.listEl())
  $('#select_list').append(this.optionEl())
}

List.prototype.destroy = function (div, option, list) {
  div.remove()
  option.remove()
  // call on task controller to delete the list's tasks?
  allLists.splice(List.all.indexOf(list), List.all.indexOf(list) + 1 )
}