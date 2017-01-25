'use strict';
// Lists Controller

function ListsController() {
  this.$addListForm = $('#add_list')
  this.$listTitleInput = $('#list_title')
  this.$selectListMenu = $('#select_list')
  this.$addTaskForm = $('#add_task')
  this.$wrapper = $('#wrapper')

  $('#add_list').on("submit", (event) => { 
    event.preventDefault()
    this.init(event) })

}

ListsController.prototype.init = function(event_obj) {
  // pageload
  if (event_obj === undefined ) {
    this.$addTaskForm.css('display', 'none')
  }
  // submit new list 
  else if (event_obj.currentTarget.id === "add_list") {
      this.$addTaskForm.css('display', 'block')
        let newList = new List(this.$listTitleInput.val())
        this.$listTitleInput.val('')

        newList.build()
        $('button').last().click( (event) => { 
           this.init(event) })
  }
  // click x to remove list
  else if ( event_obj.currentTarget.className === 'destroy-list' ) {
    var listNameToDelete = event_obj.currentTarget.nextSibling.data.trim()
    var listToDelete = List.all.find( (el) => { return el.title === listNameToDelete })
    var listIDToDelete = listToDelete.id
    var $listDivToDelete = $(`#list-${listIDToDelete}`).parent()
    var $listOptionToDelete = $(`[value="${listIDToDelete}"]`)
    listToDelete.destroy($listDivToDelete, $listOptionToDelete, listToDelete )
    
    // id="x-${this.id}"
    // need to find the sibling ul element to the event's button, extract its data-id tag from the ul
    // $('[data-id="mydataIdValue"]'); 
    // .siblings( [selector ] )

    //  return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`

    // use jquery to find the listIDToDelete
    // remove it from the DOM
    // remove the list and its children
    // remove it from the options dropdown
  }

}

