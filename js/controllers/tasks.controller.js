'use strict';
// Tasks Controller
function TasksController(){
  this.$addTaskForm = $('#add_task')
  this.$taskDescriptionInput = $('#task_description')
  this.$selectListMenu = $('#select_list')
  this.$taskPriorityInput = $('#task_priority')
  this.$wrapper = $('#wrapper')

  $('#add_task').on("submit", (event) => {
    event.preventDefault()
    this.init(event) })
}
TasksController.prototype.init = function(event_obj) {
  // pageload
  if (event_obj === undefined ) {

  }
  else if (event_obj.currentTarget.id === "add_task") {
        var descriptionInput = this.$taskDescriptionInput.val()
        var taskPriorityInput = this.$taskPriorityInput.val()
        var listOptionID = this.$selectListMenu.val()
        var listForNewTask = List.all.find(function(list) {
          return parseInt(list.id) === parseInt(listOptionID)
        })
        var newTask = new Task(descriptionInput, taskPriorityInput, listForNewTask)
        this.$taskDescriptionInput.val('')
        this.$taskPriorityInput.val('')

        newTask.build()
        $('.destroy-task').last().click( (event) => {
           this.init(event) })
  } else if ( event_obj.currentTarget.className === 'destroy-task' ) {
    // var taskNameToDelete = event_obj.currentTarget.nextSibling.data.trim()
    var taskIDToDelete = $(event_obj.currentTarget.parentNode).attr("data-id")
    var listTaskBelongsTo = List.all[$(event_obj.currentTarget.parentNode).attr("data-id")]
    var taskToDelete = listTaskBelongsTo.tasks.find( (el) => { return parseInt(el.id) === parseInt(taskIDToDelete) })
    debugger
    var $taskDivToDelete = $(event_obj.currentTarget.parentNode)
    taskToDelete.destroy($taskDivToDelete)
}
}
