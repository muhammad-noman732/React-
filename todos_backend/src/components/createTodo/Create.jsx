import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodo } from '../../store/features/todoSlice';

const Create = () => {
    const[title , setTitle] = useState("");
    const[description , setDescription] = useState("");
    // const[Error , setError] = useState("");
    // const[isSubmitting , setIsSubmitting] = useState(false);
    // const[loading , setLoading] = useState(false);
    // state from redux store
    const {todos , error , loading  ,  updateTodoid } = useSelector(state =>  state.todos);
    console.log("update to id from store " , updateTodoid);
    const dispatch = useDispatch();
        
        //  find the todo being edited
        const editTodo = todos.find(todo => todo._id === updateTodoid);
        console.log("edit todo " , editTodo);
        
    // fill the field with the todo we  want to update 
    useEffect(()=>{
      if(editTodo){
           setTitle(editTodo.title);
           setDescription(editTodo.description);
      }
      else{
        setTitle("");
        setDescription("");
      }
    },[editTodo])


    const handleSubmit = (e)=>{
      //   dispatch acction to create todo
        e.preventDefault()
        if(updateTodoid){
                 dispatch(updateTodo({
                  title , 
                  description ,
                 id: updateTodoid
                }
              ));
        }
        else{
          dispatch(createTodo({title , description}));
        }
         
         setTitle("");
         setDescription("")
    }
    

    // const handleSubmit = async (e)=>{
    //     e.preventDefault();
    //     try {
    //          setIsSubmitting(true);
    //         const response =  await fetch("http://localhost:8000/todos/create" , {
    //             method: "POST",
    //             headers: {
    //              'Content-Type': 'application/json',
    //            },
    //             body: JSON.stringify(
    //                 {
    //                     title ,
    //                     description
    //                 })
    //          })
    //          if(!response.ok){
    //             throw new Error(`Failed to create todo ${response.status}`);
    //         }
    //         const result = await response.json();
    //         console.log('Success:', result);
    //         //  update the ui immediatally
    //         setTodos(prev =>[result.data , ...prev])
    //         // Clear form after successful submission
    //         setTitle("");
    //         setDescription("");
    //         setError(null);
            
    //     } catch (error) {
    //         console.log("error" , error)
    //         setError(error.toString())
    //     } finally{
    //        setIsSubmitting(false)
    //     }
    // }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              placeholder="Enter todo title"
              required
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={e=> setDescription(e.target.value)}
              placeholder="Enter todo description"
              rows="4"
            />
          </div>
         {error && <div className='error-message'>{error}</div>}
         {loading && <div className='loading'>Loading...</div>}
         <button 
           type="submit"
          className="submit-btn"
         disabled={loading}
         >
           {loading ? "Saving..." : updateTodoid ? "Update" : "Add"}         
        </button>
        </form>
      );
}

export default Create
