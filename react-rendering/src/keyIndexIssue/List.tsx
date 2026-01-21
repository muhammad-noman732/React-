import React, { useState } from 'react'
import Food from './Food';

export default function List() {
    const [foodItems , setFoodItems] = useState(["mango" ,"orange","apple"]);

     const handleChange = ()=>{
        setFoodItems(["banana" , ...foodItems])
     }

  return (
    <div>
       <button onClick={handleChange}>Add food</button> 
       <Food foods={foodItems}/> 
    </div>
  )
}

// code version 1- 
// with the above code it gives this error
//  :1 Each child in a list should have a unique "key" prop.
// why this error 