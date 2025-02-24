import React, { useState } from 'react'

function Toggle() {
    const [user , setUser] = useState({
        name:"noman", 
        email:"noman@gmail.com",
        preference:{
            theme :"light",
            notification: true
        }

    })

    const toggleTheme = ()=>{

         setUser(prev =>({
             ...prev,
             preference:{
                ...prev.preference,
                theme : prev.preference.theme ==="light" ? "dark":"light"
             }}
            ))
        }

    const ToggleNotification = ()=>{
        setUser( prev=>({
            ...prev,
            preference:{
                ...prev.preference,
                notification: !prev.preference.notification 
            }}
         ))
    }
  return (

    <div  style={{backgroundColor : user.preference.theme==="dark"? "black":"red"}}>
      <p>name :{user.name}</p>
      <p>email :{user.email}</p>
      <p>Notification :{user.preference.notification ?"on" :"off"}</p>
      <p>Theme :{user.preference.theme}</p>
      <button onClick={toggleTheme}>Theme</button>
      <button  onClick={ToggleNotification}>Notification</button>
    </div>
  )
}


export default Toggle
