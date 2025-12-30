import { useEffect, useReducer, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../store/features/todoSlice";
import TodoList from "./TodoList";

function AddTodo() {
  // const [title , setTitle ] = useState('');
  // const [description, setDescription ] = useState('');
  const dispatch = useDispatch();
  const {updateId , todos}  = useSelector((state) => state.todos);
  console.log(`update todo Id ${updateId} and todos ${todos}`);
   
  const todoToUpdate = todos.find(todo => todo.id === updateId);
  console.log(`todo to update ${todoToUpdate}`);

  
  const validationSchema = yup.object({
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);

      if(updateId){
        dispatch(
        updateTodo({
          id: updateId,
          title:values.title,
          description:values.description,
        })
      );
      }
      else{
      dispatch(
        addTodo({
          id: Date.now(),
          title:values.title,
          description: values.description,
        })
      );
    }
      formik.resetForm();
    },
  });

  useEffect(()=>{
    if(todoToUpdate){
           formik.setValues({
            title: todoToUpdate.title,
            description: todoToUpdate.description
           })
    }
  },[updateId])
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <div style={{ color: "red" }}>{formik.errors.title}</div>
        )}
        <label>description</label>
        <input
          type="text"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description && (
          <div style={{ color: "red" }}>{formik.errors.description}</div>
        )}

        <button type="submit">add todo </button>
      </form>
   
    </div>
  );
}

export default  AddTodo;
