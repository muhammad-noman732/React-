import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import TodoList from './components/todolist/TodoList';
import AddTask from './components/addTodo/AddTask'

function App() {
  
  
//  const[task , setTask] = useState([
//   {
//   id:1,
//   text:"noman is a good boy",
//   completed:false
//  },
//  {
//   id:2,
//   text:"buy milk",
//   completed:false
//  },
//  {
//   id:3,
//   text:"to a je",
//   completed:false
//  }
// ])
       // for editing todos
         const [editTodo, setEditTodo] = useState({ id: null, text: "" });
       
         const startEditing = (id , text)=>{
          setEditTodo({id , text})
         }

         // 
        const Todos = useSelector((state) => state.todos)

  return (
     <div>
      <AddTask editTodo = {editTodo} clearText = {()=> setEditTodo({id:null , text:''})}/>
      {/*  show task list  */}
      {
        Todos.map((item)=>(
          <TodoList key={item.id} item ={item} startEditing={startEditing} />
        ))
      }
      
      
     </div>
  )
}

export default App
