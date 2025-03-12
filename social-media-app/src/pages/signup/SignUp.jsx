import React, { use, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../features/authSlice';

const SignUp = () => {
    const[email , setEmail] = useState("noma@gmail.com");
    const[password , setPassword] = useState("45248");
    const[name , setName] = useState("noman");
    const[phone , setPhone] = useState("03082637080");
    const[address , setAdress] = useState("");
    const[Gender , setGender] = useState("");

    /// state 
    const authState = useSelector(state=> state.auth.auth);
    const dispatch = useDispatch()
    const signupHandler = ()=>{
          
          let user ={
            email,
            password,
            name,
            phone,
            address,
            Gender
          }
             dispatch(signup(user))
          console.log("signup clicked" , user);
    }

  return (
    <div>
      <h1>Sign Up</h1>
      <label>Email</label>
      <input type="text" placeholder='email' value={email}onChange={e=>setEmail(e.target.value)}/><br />
      <label>Password</label>
      <input type="password" placeholder='password'  value={password}onChange={e=>setPassword(e.target.value)} /><br />
      <label>Name</label>
      <input type="text" placeholder='name'  value={name}onChange={e=>setName(e.target.value)} /><br />
      <label>Phone</label>
      <input type="text" placeholder='phone'  value={phone}onChange={e=>setPhone(e.target.value)} /><br />
      <label>Address</label>
      <input type="text" placeholder='Address'  value={address}onChange={e=>setAdress(e.target.value)} /><br />
      <label>Gender: </label>
      <label>Male</label>
      <input type="radio"  name="male" value ={Gender} onChange={()=>{setGender("male")}} />
      <label>Female</label>
      <input type="radio" name="male" value={Gender}   onChange={()=>{setGender("female")}}/><br />
      <button onClick={signupHandler}>Signup</button>
    </div>
  )
}

export default SignUp
