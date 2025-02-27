import { useState } from "react";
import "./App.css";
import StudentList from "./components/studentDetail/StudentList";
import Add from "./components/addStudent/Add";
import { useSelector } from "react-redux";

function App() {

  const [editStudent, setEditStudent] = useState({
    id:null,
    name:"",
    email:"",
    classes:"",
    rollNumber: "",
  });

  const startEditStudent = ({id , name , email , rollNumber , classes})=>{
             setEditStudent({
              id : id ,
              name: name,
              rollNumber: rollNumber,
              classes: classes,
              email: email
             })
  }

  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: "noman",
  //     email: "email.com",
  //     class: "bscs",
  //     rollNumber: "123",
  //   },
  // ]);

    // get the value in state of store
  const studentData = useSelector( state => state.todos)

  return (
     <div className="container">
      <Add editStudent={editStudent} clearText ={()=> setEditStudent({id: null , name:"" , email:"" , classes:"" , rollNumber:""})}/>
      <table className="table-wrapper">
        <tr>
          <th>Id:</th>
          <th>Name:</th>
          <th>Email:</th>
          <th>Roll.no</th>
          <th>Class</th>
          <th>Actions</th>
        </tr>
        <tbody>
          
          {studentData.map((item) => (
            <StudentList key={item.id} 
               data ={item}
               startEditStudent = {startEditStudent} 
               />
          ))}
         
        </tbody>
      </table>
      </div>
   
  );
}

export default App;
