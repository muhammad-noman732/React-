import React from 'react'
import { getDatabase , ref , set } from 'firebase/database';
import {app} from '../firebase'
const AddData = () => {

    const AddData = (id , name , phone)=>{
         console.log(id , name , phone);
         const db = getDatabase(app)
         set (ref(db,"student/"+ id ),{
            studentName : name,
            phone: phone
         })
    }

  return (
    <div>
      <h1>add data</h1>
      <button onClick={()=> AddData(123, "noman" , 438524835)}>add data</button>
    </div>
  )
}

export default AddData
