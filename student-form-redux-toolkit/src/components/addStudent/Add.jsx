import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddStudent, UpdateStudent } from "../../features/studentForm/studentSlice";

const Add = ({editStudent , clearText}) => {
  // const [name, setName] = useState("noman");
  // const [rollNumber, setRollNumber] = useState(123);
  // const [email, setEmail] = useState("email");
  // const [classes, setClass] = useState("bscs");
  // const [ completed , setCompleted] = useState(false)


  const [error , setError] = useState('');
  const [input , setInput] = useState({
    id: null,
    name: "",
    email:"",
    classes:"",
    rollNumber:''
  })

  //   use Selector (for getting state from store)
  const studentState = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  useEffect(()=>{
          //  setName(editStudent.name);
          //  setEmail(editStudent.email);
          //  setClass(editStudent.classes);
          //  setRollNumber(editStudent.rollNumber);

          setInput({
           id: editStudent.id,
           name: editStudent.name,
           email: editStudent.email,
           rollNumber:  editStudent.rollNumber,
           classes: editStudent.classes,
    
          })

  },[editStudent.id])

  
 //   for adding student info in  store
  const AddHandler = (e) => {
    e.preventDefault();

    if(input.name && input.classes && input.email && input.rollNumber){
    if (editStudent.id) {
     
     dispatch(
        UpdateStudent({
          id: input.id,
          name: input.name,   
          email: input.email,
          classes: input.classes ,
          rollNumber: input.rollNumber,
          
        })
       )
       setInput({
        name:"",
        email:"",
        classes:"",
        rollNumber:"",
        id:null
      });

      clearText()
    }     
     
 else{
     setError("")
        dispatch(
          AddStudent({
            id: Date.now(),
            name: input.name,
            email: input.email,
            classes: input.classes,
            rollNumber:input.rollNumber,
            completed: false
          })
        );
        setInput({
          name:"",
          email:"",
          classes:"",
          rollNumber:"",
        });
        // setError("")
      }}
      else{
        setError("Please Enter All Above field")
      }
     
   
  };

  return (
    <div>
      <form onSubmit={AddHandler}>
        <div className="form-group">
        <label htmlFor="">
          Name:
        </label>
        <input
          type="text"
          value={input.name}
          onChange={(e) => setInput({...input ,name:  e.target.value})}
        />
        </div>
       
       <div className="form-group">
       <label htmlFor="">
          Email:
        </label>
        <input
          type="email"
          value={input.email}
          onChange={(e) => setInput({...input , email:  e.target.value })}
        />
       </div>
       
       <div className="form-group">
       <label htmlFor="">
          Roll.No:
        </label>
        <input
          type="number"
          value={input.rollNumber}
          onChange={(e) => setInput({...input , rollNumber:  e.target.value })}
        />
       </div>
       
       <div className="form-group">
       <label htmlFor="">
          Class:
        </label>
        <input
          type="text"
          value={input.classes}
          onChange={(e) => setInput({...input , classes:  e.target.value})}
        />
       </div>
       
        <button>{editStudent.id ? <p className="edit-mode">Update</p> : "Add"}</button>
      </form>
      {error && <p style={{color: "red" , marginBottom:"5px"}}>{error}</p>}
    </div>
  );
};

export default Add;
