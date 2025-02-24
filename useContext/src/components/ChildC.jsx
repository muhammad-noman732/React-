import React, { useContext } from 'react';
// import { UserContext } from '../App';
import { ThemeContext } from '../App';

const ChildC = () => {
  // const user = useContext(UserContext);

  const {theme , setTheme} = useContext(ThemeContext);

   const themeHandler = ()=>{
    // console.log("dark");
     if(theme === "light"){
      setTheme("dark")
     }
     else{
      setTheme("light")
     }
    
             
   }
  return (

    <div>
        <button onClick={themeHandler}>
          Theme Change
        </button>
      {/* <p>data :{user.name}</p> */}
    </div>
  )
}

export default ChildC
