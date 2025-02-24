import React, { useState } from 'react'

function ArrayState() {
    const[input , setInput ] = useState("");
    const[todos , setTodo] = useState([{
        id:"1",
        text:"noman"
    }]);

    const AddTodo = () => {
         setTodo( prev =>[
              ...prev,
              {
                id: Date.now(),
                text:"learn react"
              }]
         )
    } 

     const updateTodo = (index)=>{
       const newItems =  todos.map((todo , i)=>(
           index === i ? {...todo , text: "learn js " }: todo
               ))
    setTodo(newItems)
    }

    const deleteTodo=(index)=>{
        const newTodo = todos.filter((todo , i)=>{
                return index !== i 
        })
        setTodo(newTodo)
    }

  return (
    <div>
        <input 
        type="text"
        value={input}
        style={{padding:"10px", color:"gray" , fontSize:"1rem"}}
        onChange={(e)=>{setInput(e.target.value)}} />
       <button onClick={AddTodo}>Add Todo</button>
       <ul>
        {
            todos.map((todo, index)=>(
                <li key={index}>{todo.text} <button onClick={()=>{updateTodo(index)}}>Update</button>
                <button onClick={()=>{deleteTodo(index)}}>Delete </button></li>
            ))}
            
       </ul>
        {/* <p>{input}</p> */}
    </div>
  )
}

export default ArrayState
