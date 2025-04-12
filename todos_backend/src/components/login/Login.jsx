import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./login.css"
import { useDispatch } from 'react-redux';
import { loginHandler } from '../../store/features/authSlice';

const Login = () => {

//   const[email , setEmail] = useState("noman@gmail.com");
//   const[password , setPassword] = useState("ejfjaifd")

const dispatch = useDispatch();

  const validationSchema = Yup.object({
     email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
  });

  const formik = useFormik({
    initialValues:{
        email: "" ,
        password:""
    },
    validationSchema,
    onSubmit:(value)=>{
            console.log("value");
            dispatch(loginHandler({email , password}));
    }
  })

  
  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter email to logni"
              required
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input
             type='password'
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter password to login"
            />
          </div>
         {/* {error && <div className='error-message'>{error}</div>}
         {loading && <div className='loading'>Loading...</div>} */}
         <button 
           type="submit"
          className="login-btn"
         >
          Login        
        </button>
     </form>
  )
}

export default Login
