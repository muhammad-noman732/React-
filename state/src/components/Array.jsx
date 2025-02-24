import React, {  useState } from 'react'

function Array() {
    const [fruits , setFruits] = useState(["Apple","Banana" , "grapes"]);

     const addFruit = ()=>{
        setFruits( prevFruits =>[
            ...prevFruits , "mango"
        ])
    }
    
     const RemoveFruit =(indexToremove)=>{
        setFruits(prevFruits =>(
            prevFruits.filter((_, index) => index !==indexToremove)
        ))
     }

  return (
    <div>
        <button onClick={addFruit}>Add Fruit</button>
    <ul>
        { fruits.map((fruit , index)=>(
            <li key={index}> {fruit} {" "}
             <button onClick={() => RemoveFruit(index) }>remove Fruit</button> </li>
            
        ))}
       
    </ul>   
    </div>
  )
}

export default Array
