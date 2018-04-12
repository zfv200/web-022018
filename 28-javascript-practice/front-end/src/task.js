let store = {tasks:[]}
class Task {

  constructor(description, priority, completed, id){
    this.description = description
    this.priority = priority
    this.completed = completed
    this.id = id
    store.tasks.push(this)
  }

  static renderAll(){
    debugger;
    return store.tasks.slice().map(task=>task.render()).join("")
  }

  edit(){
    return `New Description: <input id="edited-description" type="text" value="${this.description}"></input><br>
            New Priority: <input id="edited-priority" type="text" value="${this.priority}"></input><br>
            <button id="submit-edit-${this.id}">Update Task</button>`
  }

  render(){
    return `<div id="task-holder-${this.id}">
      <ul>
      <li>Description: ${this.description}</li>
      <li>Priority: ${this.priority}</li>
      <li>Completed: ${this.completed}</li>
      <button id="edit-task-${this.id}">Edit Task</button>
      <button id="mark-complete-${this.id}">Mark Complete</button>
      <button id="delete-${this.id}">Delete Task</button>
    </ul>
    </div>`
  }
}
