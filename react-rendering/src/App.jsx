import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// this is the rendering part of the code here we will learn reconcillation diffing how differ from js and how it works 

function App() {
  let[count, setCount] = useState(0)
  
  // const a = 2;
  // a= a+ 3 // assignment to const is not allow 
  // console.log(a+2 ); // it work as here we are changing the value not assigning new value 
  // console.log(a);
  
  
// count++ and ++count are not allowed as here mutating state directly  so use count +1
// as if we write count+1 in this it doe this count +1 return the value 6 but count is still 5 
// so not mutatin state 
// but in ++count in this sonerion here it do count = count +1 here first it increment the value
// and now assign a new value to count so now it change the value directly in the count instead react says i will handle this do not change this so it is against rule maybe it works in some case but with settimetout etc not work and also with const

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




