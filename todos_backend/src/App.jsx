import { useEffect, useState } from "react";
import "./App.css";
import Create from "./components/createTodo/Create";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./store/features/todoSlice";
import TodoList from "./components/todoList/TodoList";

function App() {

  return (
    <div>
      <Create/>
      <TodoList/>
    </div>
  );
}

export default App;
