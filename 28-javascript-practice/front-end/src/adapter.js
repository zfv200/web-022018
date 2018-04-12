class Adapter{
  constructor(){

  }

  get(){
    return fetch('http://localhost:3000/tasks', {
      headers: {'Content-Type':'application/json'},
      method: 'get'
    })
  }

  post(e){
    let newDescription = document.getElementById('new-task-description').value
    let newPriority = document.getElementById('new-task-priority').value
    fetch('http://localhost:3000/tasks', {
      headers: {'Content-Type':'application/json'},
      method: 'post',
      body: JSON.stringify({description: `${newDescription}`, priority: `${newPriority}`})
    }).then(()=>{this.get()})
  }

  markComplete(e){
    let taskId = parseInt(e.target.id.split("-").slice(-1)[0])
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      headers: {'Content-Type':'application/json'},
      method: 'PATCH',
      body: JSON.stringify({completed:true})
    }).then(()=>this.get())
  }

  patch(e){

    let taskId = parseInt(e.target.id.split("-").slice(-1)[0])
    let newDescription = document.getElementById('edited-description').value
    let newPriority = document.getElementById('edited-priority').value
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      headers: {'Content-Type':'application/json'},
      method: 'PATCH',
      body: JSON.stringify({description:`${newDescription}`, priority: `${newPriority}`})
    }).then(()=>this.get())
  }

  delete(e){
    let taskId = parseInt(e.target.id.split("-").slice(-1)[0])
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'delete'
    }).then(()=>this.get())
  }
}
