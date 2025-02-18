import React from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  // todos state for storage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (!savedTodos || savedTodos === "undefined") {
      return [];
    }
    return JSON.parse(savedTodos);
  });
  
  // these two states for editing text on update
  const[isEditible , setIsEditble] = useState(null);
  const[EditText , setEditText] = useState("");
  const [input, setInput] = useState("");
  //  this is state for todos array
  // const [todos, setTodos] = useState([
  //   {
  //     id: Date.now(),
  //     text: "hello world",
  //     completed: false,
  //   },
  // ]);

  //    Add Task
  const addTodo = () => {
    if(input.trim() === ""){
      return
    }
    const newTodos = [
      ...todos,
      { id: Date.now(), text: input, completed: false }
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    // clear the input
    setInput("");
  };

  //  Delete Todo...
  const deleteTodo = (id) => {
   const newTodos = todos.filter((todo) => todo.id !== id);
   setTodos(newTodos);
   localStorage.setItem("todos" , JSON.stringify(newTodos))
  };

  //    Toggle Todo
  const toggleTodo = (id) => {
    
    const newTodos= todos.map((todo) =>
        todo.id === id ? {
              ...todo,
              completed: !todo.completed,
            }
            : todo);
          setTodos(newTodos);
          localStorage.setItem("todos" , JSON.stringify(newTodos))
  };

   const updateTodo = (id , newTask)=>{
    
          const newTodos =  todos.map(todo =>(
            todo.id === id ?  {
                ...todo,
                text : newTask
            }: todo
          ))
          setTodos(newTodos);
          localStorage.setItem("todos" , JSON.stringify(newTodos))
            
   }
        
  const  handleEditClick=(todo)=>{
              setIsEditble(todo.id)
              setEditText(todo.text)
        }
        // save task
      const saveEditTask =(id)=>{
        updateTodo(id , EditText);
        setIsEditble(null)
        setEditText("")

      }
           
  return (
    <div className="container">
      <div className="form">
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add" onClick={addTodo}>
          Add Todo
        </button>
      </div>
  
      <ul className="todos">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              className="checkBox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {/*  agar todo edit mode m he  */}
            {isEditible === todo.id ? (
              <>
                <input
                  type="text"
                  value={EditText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="save"onClick={() => saveEditTask(todo.id)}>Save</button>
                <button className="cancel" onClick={() => setIsEditble(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button className="update" onClick={() => handleEditClick(todo)}>
                  Update
                </button>
              </>
            )}
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}  

export default App;
