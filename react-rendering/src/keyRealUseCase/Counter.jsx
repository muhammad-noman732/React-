import React, { useState } from 'react'

export default function Counter({name}) {
    const[count , setCount] = useState(0)
  return (
    <div>
      <h1>Our first Counter App: {name}</h1>
      <p>Counter :{count} </p>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}
