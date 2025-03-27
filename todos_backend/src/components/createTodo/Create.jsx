import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../../store/features/todoSlice';

const Create = () => {
    const[title , setTitle] = useState("");
    const[description , setDescription] = useState("");
    // const[Error , setError] = useState("");
    // const[isSubmitting , setIsSubmitting] = useState(false);
    // const[loading , setLoading] = useState(false);
    // state from redux store
    const {todos , error , loading  } = useSelector(state =>  state.todos);
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
      //   dispatch acction to create todo
        e.preventDefault()
         dispatch(createTodo({title , description})); 
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
         {loading && <div className='loading'>{loading}</div>}
          <button 
          type="submit"
           className="submit-btn"
           disabled={loading}>
           {loading ? "Submitting..." :"Add Todo"} 
          </button>
        </form>
      );
}

export default Create
