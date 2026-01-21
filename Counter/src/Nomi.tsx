import React, { useEffect, useState } from 'react'

function Nomi() {
    let [count , setCount] = useState(0);

    
    


  return (
    <div>
      <h1>counter :{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default Nomi
