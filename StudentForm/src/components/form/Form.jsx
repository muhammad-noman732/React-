import React, { useState } from "react";
import * as yup from 'yup';
import './form.css';

function Form({addRecod}) {
  const [error, setError] = useState("")
  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [clas , setClass ] = useState("")
  // validation
  const schema = yup.object().shape({
    name: yup.string().min(5).max(20).required(),
    email:yup.string().email().max(20).required(),
    roll: yup.number().typeError("Rollnumber must be number").required(),
    class:yup.string().required()
  })

  const handleSubmit =async(e)=>{
       e.preventDefault();
       let data = {
        name : name,
        email:email,
        roll:roll,
        clas:clas
       }
      
       try {
       let result = await schema.validate(data);
       console.log("result" , result);
       addRecod(data)

       setEmail("");
       setName ("");
       setRoll ("");
       setClass("");
       setError("");
       
       } catch (error) {
         console.error("error", error)
        setError(error.toString());
       }
       
    //  state lifting , callback to parent 
   


  }
  return (
    <div>
        
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          
        />
        <label htmlFor="Email">Email:</label>
        <input
          id="Email"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="roll">Roll.No:</label>
        <input
          id="roll"
          type="text"
          placeholder="Enter rollnumber"
          value={roll}
          onChange={(e) => {
            setRoll(e.target.value);
          }}
        />
      <label htmlFor="class">Class:</label>
        <input
        id="class"
         type="text" 
         value={clas}
         onChange={(e) => setClass(e.target.value)}
         />

        <button type="submit">Add Student</button>
        </form>

        {error ?
        (
          <span style={{backgroundColor:"red"}}>{error}</span>
        ):""}
       
    </div>
  );
}

export default Form;
