import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, setEditId } from '../store/features/todoSlice';

const TodoList = () => {

    const {todos } = useSelector(state => state.todos)
    console.log("todos" , todos);
    const dispatch = useDispatch()
    
    const deleteHandler = (id)=>{
        console.log(`todo to delete ${id}`);
        dispatch(deleteTodo({id}))
    }

    const updateHandler = (id)=>{
   console.log(`todo to update ${id}`);
     dispatch(setEditId({id}))
    }
  return (
    <div style={{gap: "5px" }}>
      {todos.map(todo =>(
        <div key={todo.id}>
            <h1 style={{fontSize:`17px` , paddingBottom:"0px"}}>{todo.title}</h1>
            <p>{todo.description}</p>
            <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
            <button onClick={()=>updateHandler(todo.id)}>update</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
