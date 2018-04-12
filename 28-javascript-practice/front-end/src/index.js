document.addEventListener('DOMContentLoaded', e=>{
  const adapter = new Adapter
  const taskContainer = document.getElementById("task-container")
  const newTask = document.getElementById('add-task')
  const taskHolder = document.getElementById('task-holder')

  document.addEventListener('click', e=>{
    e.preventDefault();
    if (e.target.id==="add-task"){
      adapter.post(e)
    } else if (e.target.id.includes("edit-task")){
      let taskId = parseInt(e.target.id.split("-").slice(-1)[0])
      let targetTask = store.tasks.find(task=>task.id===taskId)
      let targetHolder = document.getElementById(`task-holder-${taskId}`)
      targetHolder.innerHTML = targetTask.edit()
    } else if (e.target.id.includes("submit-edit")){
      adapter.patch(e)
    } else if (e.target.id.includes("delete")){
      adapter.delete(e)
    } else if (e.target.id.includes("mark-complete")){
      adapter.markComplete(e)
    }
  })


  adapter.get()


})
