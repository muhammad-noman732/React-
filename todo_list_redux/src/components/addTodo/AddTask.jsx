import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, updateTodo } from "../../features/todoslice/todoSlice";
const AddTask = ({ editTodo, clearText }) => {
  const [input, setInput] = useState("");

  // use selectors ka use krte hoe todos ki state li h
  const todo = useSelector((state) => state.todos);
  // aur jo new value add ki h wo useDispatch ka use krty hoe action ko pass krdi
  const dispatch = useDispatch();

  // jb editTodo pr click ho to input ko editTodo wale text se bhr dena h 

  useEffect(()=>{
           if(editTodo.id){
               setInput(editTodo.text);
           }
  },[editTodo])


  const AddHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    console.log("task added", input);
    //  pass values to dispatch , when trigger occurs

    if (editTodo.id) {
      setInput(editTodo.text);
      dispatch(
        updateTodo({
          id: editTodo.id,
          newText: input,
        })
      );
      setInput("") // reset the input field
      clearText() // clear the the text in parent so the id for update is null
      
    } else {
      // dispatch action to add new todo
      dispatch(
        AddTodo({
          id: Date.now(),
          text: input,
          completed: false,
        })
      );
      setInput(""); // clear input
    }
  };
  return (
    <div>
      {/*   Add task  */}

      <form onSubmit={AddHandler}>
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button>{editTodo.id ? "Update Task" : "Add Task"}</button>
      </form>
    </div>
  );
};

export default AddTask;
