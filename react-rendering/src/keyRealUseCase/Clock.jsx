import React, { useState } from 'react'
import Counter from './Counter';

export default function Clock() {
    const[clocks , setClocks] = useState(["A","B","C"]);

    const handleChange = ()=>{
        setClocks(["D" , ...clocks])
    }
  return (
    <div>
       <button onClick={handleChange}>Add clock</button>
       <div style={{display:"flex", justifyContent:"center" ,alignItems:"center" , gap:"10px" }}>
        {/*
            here we did not provide the key and calling the Counter function based on the elements in array so in react id we did not provide key react automaticaly provide a index 
            and in this way issue is if we pass index than when it compare virtual dom with new one 
            than it will get an issue which can check on logs because when it compare new and virtual dom and we add new value D
            at start which has index 0 and in old virtual dom at 0 we have A so it changes the content 
            now in counter if value of count in A is 3 now when as click on add clock and add D at start what actually happens
            it will create  a new element and now when counter re render here first it will pass the D means call for D
            now in counter is value of count at index 0 was 3 and here Clock pass D as 0 index to counter so the value of count for D 
            will be 3 as the value of count  is stored based  on the index as(state attatched to key most important )  
            */}
        {clocks.map(clock=>(
        <Counter name={clock}></Counter>
        ))}


         {/* {clocks.map(clock=>(
        <Counter key={clock} name={clock}></Counter>
        ))} */}
       </div>
       
      
    </div>
  )
}
