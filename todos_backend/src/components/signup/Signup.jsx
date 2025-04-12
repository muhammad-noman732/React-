import React, {  useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signupHandler } from '../../store/features/authSlice';
import './signup.css'
const Signup = () => {

  // const[userName , setUserName] = useState("noman");
  // const[address , setAddress] = useState("lahoe")
  // const[password , setPassword] = useState("ejfjaifd")
  // const[email , setEmail] = useState("ejfjaifd@daksfjds");

 const dispatch = useDispatch();
//  get the state from the store for errors from backend and loading
 const { error , loading } = useSelector(state => state.users)
  // ** form validation using yup and formik
  // * yup is to use schema validation ..
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, 'Must be at least 4 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    address: Yup.string()
      .min(5, 'Address is too short')
      .max(24 , "Address is to long")
      .required('Address is required'),
  });

  //  ** formik hook to handle formdata and validation
  const formik = useFormik({
    // in formik  no need of usestates it handles automaticall all states here in initial values
    initialValues:{
      userName: '',
      email:'',
      password:'',
      address:'',
    },
    // validation schema for validation
    validationSchema,
    // on submit handler 
    onSubmit: async (values, { resetForm }) => {
      try {
        // Wait for the async signup action to complete.
        const action = await dispatch(signupHandler(values));
        
        // Check if the action was fulfilled using the matcher
        if (signupHandler.fulfilled.match(action)) {
          resetForm(); // Reset the form fields on success.
        }
      } catch (error) {
        console.error('Signup error:', error);
      }
    }
  })

  // const dispatch = useDispatch();
  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   console.log("user click on signup button" );
  //   dispatch( 
  //     signupHandler({userName , email , password , address})
  //   )
    
  

  return (
    <form onSubmit={formik.handleSubmit} className="signup-form">
    <div className="form">
      <label htmlFor="userName">User Name:</label>
      <input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        placeholder="Enter user name"
      />
      {formik.touched.userName && formik.errors.userName && (
        <div className="error-message">{formik.errors.userName}</div>
      )}
    </div>

    <div className="form">
      <label htmlFor="address">Address:</label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        placeholder="Enter address"
      />
      {formik.touched.address && formik.errors.address && (
        <div className="error-message">{formik.errors.address}</div>
      )}
    </div>

    <div className="form">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Enter email"
      />
      {formik.touched.email && formik.errors.email && (
        <div className="error-message">{formik.errors.email}</div>
      )}
    </div>

    <div className="form">
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="Enter password"
      />
      {formik.touched.password && formik.errors.password && (
        <div className="error-message">{formik.errors.password}</div>
      )}
    </div>

    {/* Show backend error (like ,  email already exists)  */}
        {error && <div className="error-message">Error: {error}</div>}
    {/* Show loading indicator during the signup process */}
        {loading && <div className="loading">Loading...</div>}
    <button type="submit" className="signup-btn" disabled={loading}>
      Signup
    </button>
  </form>
  )
}

export default Signup

