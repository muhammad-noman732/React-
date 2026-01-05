import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// this is the rendering part of the code here we will learn reconsillation diffing how differ from js and how it works 

function App() {
  let[count, setCount] = useState(0)
  
  // const a = 2;
  // a= a+ 3 // assignment to const is not allow 
  // console.log(a+2 ); // it work as here we are changing the value not assigning new value 
  // console.log(a);
  
  

  return (
    <div>
      <h1>this is react counter application</h1>
      <p>counter :{count}</p>
      <button onClick={()=>setCount(count++)}>increment</button>
      <button onClick={()=>setCount(count--)}>decrement</button>
    </div>
  )
}

export default App




