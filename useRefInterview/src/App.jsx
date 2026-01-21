import {useRef, useState } from 'react'

function App() {
  const [time , setTime ] = useState(0);
  let intervalId = null;

  //  instead of keeping the above intervalid which is not best here 
  //  use use the useref .
  // useRef will remember and hold the id from the previous render and 
  // does not initialize again it contain the previous render value

   let intervalRef = useRef(null)
  //  create the object with inital current as null
  // intervalRef = {
  //   current: null
  // }

  // this object is created only once depite of many re render 

   console.log("re render ");
   
  // here in this the issue is that when call the setInterval and change the state
  // the components re render and it will run with new value of time 1 which show on UI
  // but it is not increasing the time even we want that setInterval runs after every second

  // this above is because of closure is in this 
  // setTime(time + 1) this inner function remember the value from its top where it is 0
  // so it holds this value and after every second it run the setInterval but as it get the values 0 so increment it
  // the component re render first again the button is clicked and setinterval run which change the state and components again re render 
  // in this time state has 1 so show time 1 . now again after second setInteval get the value from the its top scrop that is 0 increment now it is 1 
  // react compare there is no change but 1 time react re render but when again after 1 second as no change react does not re render the component
//  web api hold the time value 0 
 
 
  // function handleStart(){
  //   setInterval(() => {
  //     setTime(time+1)
  //     console.log("setInterval is called ");
      
  //   }, 1000);
     
  // }

  // ======= solution
  function handleStart(){
    // keep the id of interval so tell the web api to stop it 
    //  intervalId =  setInterval(() => {
    //   setTime(time => time+1)
    //   console.log("setInterval is called ");
      
    // }, 1000);

    // use useRef for keeping the id

    // in a case if user click multiple time it runs multiple interaval
    // so before running the next  if any previous than return null
    
    if(intervalRef.current !== null){
      // do not do this (will cause freeze because it always first check this condition to remove previous interval)
      // clearInterval(intervalRef.current) // never do cause freeze 
      return;  
    }
    intervalRef.current =  setInterval(() => {
      setTime(time => time+1)
      console.log("setInterval is called ");
      
    }, 1000);
  }

// now in abvoe code we hold the value as here in state passing a function 
// which get the value from its top function first time it is 0 now when click it is 1 after second not it will rerender the compo
// and also in this as setTime get the callBack it will also holds the previous value which is 1 so after second it will get the previoes value and incremtn 
// 1 in this(but now the component will also be re render everytime that is the issue as well)
// in this functional update it holds the latest value fo time 
 
 
//  ==== issue 
  //  in this code issue is as we are clearing the intervalId but the issue is it is getting the 
  //  id is null ? 
  //  it is because when web api runs the setInterval in this increate the time and change
  //  the state and re-render 
  //  as render the Component again than now this time the intervalId becomes null
  //  now in clearInterval id is null so it will not work

  function handleStop(){
      // clearInterval(intervalId) // not the good
      clearInterval(intervalRef.current)
  }


   
  function handleReset(){
       clearInterval(intervalRef.current)
       setTime(0)
     
  }

  
  return (
   <div>
    <h1>time: {time}</h1>
    <button onClick={handleStart}>start </button>
    <button onClick={handleStop}>stop </button>
    <button onClick={handleReset}>reset </button>
   </div>
  )
}

export default App
