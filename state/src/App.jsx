import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import ObjectState from './components/ObjectState';
import Toggle from './components/toggle/Toggle';
import ArrayState from './components/ArrayState/ArrayState';
import Array from './components/Array';
function App() {
  const [count, setCount] = useState(0)

  function increment(){
    //  this will change the state but does not check about the previous state in case like
    //  we have a button +3 and +1 but when clcik on +3 it only increment the count by 1
    // it is because of batching as we are updating the state multiple times but react for performance reason 
    // react batches all these three updates together and procees them in one go

            // setCount(count+1 )
  

  //  so for keeping track of previous value should use this  way 

              setCount(prevCount => prevCount +1 )
}

  return (

    <>
      {/*  In this  learn about state in detail how it works how to update and also with object and arrya  */}
        
      <h1>Count :{count}</h1>
       <button onClick={()=>{
        increment();
        increment();
        increment();
       }}>+3</button>
      <button onClick={increment}>+1</button>


      {/*  object componetns for understanding of objects */}
      <ObjectState />
      <Toggle/>
      {/* Array components */}
      {/* <ArrayState/> */}

      <Array/>
    </>
  )
}

export default App
