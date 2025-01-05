import { useState } from 'react'

import './App.css'



function App() {
  const[ todos ,setTodos]=useState([]);
  const [todoTitle, setTodoTitle]=useState(" ");
  //...todos =spread operator 
  function addTodo(){
    setTodos([...todos , {title:todoTitle ,id:todos.length }])
}
function deleteTodo(id){
  // from todo delete the todo task with given
  let updatedTodos=[]; 
  for(let i=0;i<todos.length;i++){
    if(todos[i].id!==id){
      updatedTodos.push(todos[i]);
    }
  }
  setTodos(updatedTodos);
}

// in return <div className='complete'> <p className='done'>Task is Done</p> </div>


  
  return (
  <div className='todo_box'>
      <h1 className='heading'>TO DO APPLICATION</h1>
      <div className='input_box'>
      <input type="text" placeholder='enter your task' onChange={(e)=>setTodoTitle(e.target.value)} />
      <button onClick={()=>addTodo()}>Add</button>
      </div>
      <div className="container">
      {todos.map((el)=>{
        return(
          <div className='to_do' key={el.id}>
          <p className='todo-title'>{el.title}</p>
          
          <button onClick={()=>deleteTodo(el.id)}>Delete</button>
          </div>
        );
      })}

      </div>

      
      



  </div>
  )
}



export default App
