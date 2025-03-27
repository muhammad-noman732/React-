import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteTodo, getTodos } from '../../store/features/todoSlice';
const TodoList = () => {
    // const [todos, setTodos] = useState([]);
  // const [loading , setLoading] = useState(false);
  // const [error , setError] = useState("");
  
  // const fetchAlTodos = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/todos/");
  //     const data = await response.json();
  //     console.log("data", data);
  //     if (data.status === "success") {
  //       setTodos(data.data); 
  //     } 
  //   } catch (error) {
  //     console.log('error' , error);
  //     setError(error.message);
  //     }finally{
  //       setLoading(false)
  //     }
  // };

  //  geting state from redux 
  const {todos , loading , error} = useSelector(state => state.todos)
  console.log("state getting form store" , todos , error , loading);
  
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getTodos())
  }, []);

  // const deleteHandler =async (id)=>{
  //   // for confirming
  //   if (!window.confirm('Are you sure you want to delete this todo?')) return;
       
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`http://localhost:8000/todos/delete/${id}`,
  //       {
  //         method: "DELETE"
  //       })
  //        if(!response.ok){
  //            throw new Error ("Failed to delete todo")
  //        }

  //       // delete the todo from state
  //       setTodos(prev => prev.filter( todo=> todo._id !==id));

  //   } catch (error) {
  //         console.log("error" , error);
  //         setError(error.message)
  //   }finally{
  //     setLoading(false)
  //   }
  // }

  const deleteHandler = (id)=>{
          dispatch(deleteTodo(id))
  }

  return (
    <div className="todo-container">
    <h1>Crud App</h1>
    {error && <div className='error-message'> {error} </div>}
    <p className="loading ">{loading && "Loading..."}</p>
    {todos.length > 0 ? (
      todos.map((todo) => (
        <div className="todo-card" key={todo._id}>
          <p>{todo?._id}</p>
          <h2>{todo?.title}</h2>
          <p>{todo?.description}</p>
          <p>Created at: {new Date(todo?.createdAt).toLocaleString()}</p>
          <button
           className="delete-btn"
           disabled={loading}
           onClick={()=>{deleteHandler(todo?._id)}}
           >
            {loading ? "Deleting..." :" Delete"}
          </button>
        </div>
      ))
    ) : (
      <p>No todos found. Create your first todo!</p>

    )}
  </div>
);
}

export default TodoList
