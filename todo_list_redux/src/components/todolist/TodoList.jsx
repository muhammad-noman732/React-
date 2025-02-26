import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodo, ToggleTodo } from '../../features/todoslice/todoSlice';

const TodoList = (props) => {

     const todos = useSelector(state => state.todos);
     const dispatch = useDispatch();

    const deleteHandler = ()=>{
        console.log("todoItem is deleted with id " , props.item?.id);
        dispatch(DeleteTodo({
            id: props.item?.id
        }))
        
    }

    const toggleHandler = ()=>{
        console.log("todoItem is toggled with id " , props.item?.id);
           dispatch(ToggleTodo({
            id:props.item?.id
           }))
    }

    const updateHandler = ()=>{
      console.log("update button clicked" , props.item?.id);

      
    }

    

  return (
    <div>
      <ul className='todoList'>
        <input
         type="checkbox"
         checked={props.item?.completed}
         onChange={toggleHandler}
          />
        <li  style={{ 
          textDecoration: props.item?.completed ? 'line-through' : 'none',
          color: props.item.completed ? 'green' : 'inherit'
        }}>{props.item?.text}</li>
        <button className='del_btn' onClick={deleteHandler}>Delete</button>
        
        <button className='update_btn' onClick={()=>props.startEditing(props.item?.id , props.item?.text)}>Update</button>
      </ul>    
    </div>
  )
}

export default TodoList
