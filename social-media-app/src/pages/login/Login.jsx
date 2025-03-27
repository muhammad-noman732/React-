import { react} from "react"
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
      const dispatch = useDispatch()
      const navigate = useNavigate()
  
         const loginHandler = ()=>{
               
               let user ={
                 email,
                 password,
                }
                  dispatch(login(user))
                 
               console.log("login clicked" , user);
               
         }
     
       return (
         <div>
           <h1>Login Page </h1>
           <label>Email: </label>
           <input type="email" placeholder='email' value={email}onChange={e=>setEmail(e.target.value)}/><br />
           <label>Password: </label>
           <input type="password" placeholder='password'  value={password}onChange={e=>setPassword(e.target.value)} /><br />
           <button onClick={loginHandler}>Login</button>
      
 </div>

       
)
}
export default Login
