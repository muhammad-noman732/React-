import { Component, use, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const[toggle ,setToggle ] = useState(false)
//   const incrementCounter = () => {
//     setCount(prev => prev + 1);
//   };

//   const decrementCounter = () => {
//     setCount(prev => prev > 0 ? prev- 1 : 0);
//   };

//   const resetCounter = () => {
//     setCount(0);
//   };

//   const toggleMode = ()=>{
//     setToggle(!toggle)
//   }

//   return (
//     <div className= {toggle ?"on":"off"  }>
//       <h1 className='heading'>Pulse Counter</h1>
//       {
//         toggle ? (
//           <FontAwesomeIcon 
//           style={{color:"white"}}
//           onClick={toggleMode} icon={faToggleOn} size="3x" className="toggle-icon"
//            />
//        ):(
      
//         <FontAwesomeIcon 
//         onClick={toggleMode} icon={faToggleOff}  size="3x" className="toggle-icon"
//          />
//        )
//       }
      
//       <h2 className='count'>{count}</h2>
//       <div className="buttons">
//         <button onClick={incrementCounter}>Increment</button>
//         <button onClick={decrementCounter}>Decrement</button>
//       </div>
//       <button className='reset' onClick={resetCounter}>Reset</button>
//     </div>
//   );
// }

// export default App;

import React from 'react'

 function App() {

  // here in the below code it will only show count in logs but not update text as we are not updating dom
  // let count = 0;
  // const incrementCounter =()=>{
  //     console.log('count is ' , count);
  //     count++;
  // }


  // here this will work but if we have multipe count and need to update we have to write a lot of code
  // and also here in this we are directly updating in the dom that is the big issue 

  // actually we want that whenever click on the button it call the function again so for that usestate does the magic where it change it automatically again call the function
    // let[count ,setCount] = useState(0);

    // const incrementCounter =()=>{
    //    count++;
    //    const para = document.querySelector("p");
    //    para.textContent = `Count ${count}`
    //    console.log('count is ' , count);
    // }

    
    // let[count ,setCount] = useState(0);

    // const incrementCounter =()=>{    
    //   count++; 
    //   console.log("calling function App");
    //   console.log("count",count); 
    //   setCount(count);
    //   console.log("calling function App" );
 
    // }

    const[count ,setCount] = useState(0);

    //usestate return an array with value and function and we destruct it 
    const result = useState(0)// it is a function that return array 
    console.log(result); // [0, function]
    const value = result[0];// current value
    const fun = result[1];// function of setState to change value 
     
    console.log("value" , value);
    console.log("function" , fun);
    // we can destruct it 
    const [value1 , setValue] = useState(0)
    

    const incrementCounter =()=>{    
      console.log("count",count); 
      setCount(count+1 );

    }
  return (
    <div>
      <p>Count {count}</p>
      {
      /* when click on this button it will increment the count and than react 
         call again the function/component App when react call the app then it
         will get the value of count 1 so on Ui show the 1  
      */
      }
      <button onClick={incrementCounter}>Increment</button>
    </div>
  )
}


//react store the component state in the fiber architecture where each instance store in fiber node
// react does not store state in Component it store in fiber node
// when we use multiple states react use hook of linked list where each state linked to next thats why order matters. This is why hooks must be called in the same order every render - React relies on call order to match hooks to their state.


 function Counter() {
  const [count, setCount] = useState(0);
  
  console.log('Component rendered with count:', count);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// 1. React calls Counter()
// 2. useState(0) is called
// 3. React creates a memory slot and stores 0
// 4. Returns [0, setCount]
// 5. Component renders: <p>0</p>
// 6. Console: "Component rendered with count: 0"
// ```

// ### **Click Button**
// ```
// 1. setCount(1) is called
// 2. React says: "State changed! Schedule re-render"
// 3. React calls Counter() AGAIN
// 4. useState() is called AGAIN
// 5. This time React returns [1, setCount] from memory
// 6. Component renders: <p>1</p>
// 7. Console: "Component rendered with count: 1"



//================= Fiber ======================= 

//Fiber is react internal structure 
// const fiberNode = {
//   type: Counter ,     // name of function
//   stateNode:null ,    // DOM element reference 
//   memoizedState:null, // state Lives here
//   child: null,        // First child here
//   siblings: null,     // next sibling fiber
//   return: null ,      // parent fiber
//   alternative:null,   // previous version of this fiber 
// }

// **Visual representation:**
// ```
// Our App:
// <App>
//   <Counter />
//   <Counter />
// </App>

// React's Fiber Tree:
//          [App Fiber]
//               |
//       +-------+-------+
//       |               |
// [Counter Fiber]  [Counter Fiber]
//  memoizedState    memoizedState
//    count: 0         count: 0


// when use useState react store stat in fiber node 

// for single state 

// function Counter() {
//   const [count, setCount] = useState(0);
//   return <div>{count}</div>;
// }

// fiber structur 
// counterFiber = {
//   type : Counter,
//   memoizedState : {
//     // this is the hooks object
//      memoizedState: 0 , // count value
//      queue:{
//       pending : null 
//      },
//      next: null // not next hook
//   }
// }

// Multiple useState
// Here's where it gets interesting:

// function Form() {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState(0);
//   const [email, setEmail] = useState('');
  
//   return <div>{name} {age} {email}</div>;
// }

// no here it make Linked list 

// const formFiber = {
//   type: Form,
//   memoizedState:{
//     // First hook (name)
//     memoizedState:'',
//     queue:{
//       pending:null,
//     },
//     next:{
//       // next hook (age)
//       memoizedState:{
//         memoizedState:0,
//         queue:{pending : null},
//         next:{
//            memoizedState:{
//              // next hook (email)
//              memoizedState:"",
//              queue:{pending : null},
//              next:null      
//       }
//     }
//   }
// }
//   }
// }




//======== order of hooks ===================== 
function component() {
  const [name, setName] = useState('John');   // Hook 1
  const [age, setAge] = useState(25);         // Hook 2
  return <div>{name} {age}</div>;
}

// here above it is correct but in this case 

  function component1({isLoggedIn}) {
  if (isLoggedIn){
      const [name, setName] = useState('John');  // sometime called
  }

      const [age , setAge] = useState(25) // always called   
    return <div>
        {name} {age}
        </div>;
 }


// **First Render (isLoggedIn = true):**
// Hook 1 → name: 'John'
// Hook 2 → age: 25
// ```

// **Second Render (isLoggedIn = false):**
// ```
// Hook 1 → age: 25  ✗ Wrong! React thinks Hook 1 is name!
// Hook 2 → ???      ✗ Error!



// how Queue work ..
// react does not update immediately it add in the queue



// export default function Count (){
//   const [count , setCount] = useState(0);

//   function incrementCounter(){
//     setCount(1);
//     setCount(2);
//     setCount(3);  
//   }
//    return(
//     <div>

//       <button onClick={incrementCounter}>{count}</button>
//     </div>
//    )
// }

// here click on the button incrementCounter run and add in the queue

// setCount(1);  // Add to queue
// setCount(2);  // Add to queue
// setCount(3);  // Add to queue

// queue now looks like this 

// queue ={
//   pending :{
//     action:1, //last update
//     next:{
//       action:2,// middle update
//       next:{
//         action:3 , // first
//         next:null
//       }
//     }
//   }
// }
// After handleClick finishes, React processes queue:

// 1. Start with current state: 0
// 2. Process update 1: new state = 1
// 3. Process update 2: new state = 2
// 4. Process update 3: new state = 3
// 5. Final state: 3
// 6. Re-render component with count = 3

// export default function DebugCounter() {
//   console.log('🔵 Component function called');
  
//   const [count, setCount] = useState(() => {
//     console.log('🟢 useState initializer called');
//     return 0;
//   });
  
//   console.log('🟡 Current count value:', count);
  

//   function handleClick() {
//     console.log('🔴 Button clicked, calling setCount');
//     setCount(count + 1);
//     console.log('🔴 setCount called, but count is still:', count); 
//   }
  
//   console.log('🟣 Returning JSX');
  
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }


// Console output on first render:**

// 🔵 Component function called
// 🟢 useState initializer called
// 🟡 Current count value: 0
// 🟣 Returning JSX
// ```

// **Console output when clicking button:**
// ```
// 🔴 Button clicked, calling setCount
// 🔴 setCount called, but count is still: 0
// [React schedules re-render]
// 🔵 Component function called
// 🟡 Current count value: 1
// 🟣 Returning JSX

// Key observation: setCount doesn't change count immediately. It schedules a re-render where count will be the new value.

// Summary So Far

// State = Special variable that triggers re-render when changed
// useState = Function that returns [currentValue, setter]
// Fiber = React's internal object that stores component info
// memoizedState = Where state lives in the Fiber (as a linked list of hooks)
// Queue = Where pending updates are stored before re-render
// Hook order matters = React uses call order to match hooks to stored values
// Updates are queued = setCount doesn't update immediately



// state updates are asynchronus 


export default function asyncCount (){
  const[count ,setCount] = useState(0)
    
  function handleClick() {
    console.log('Before setCount:', count);  // 0
    
    setCount(count + 1);
    
    console.log('After setCount:', count);   // Still 0! Not 1!
    
    console.log('handleClick finished');
  }
  
  console.log('Component rendered, count:', count);
  
    return <button onClick={handleClick}>{count}</button>;
}

// Why? setCount doesn't update count immediately. It schedules an update for later.

// function Form() {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState(0);
//   const [email, setEmail] = useState('');
  
//   function handleSubmit() {
//     setName('John');   // If synchronous → re-render
//     setAge(25);        // If synchronous → re-render
//     setEmail('j@j.com'); // If synchronous → re-render
//     // Total: 3 re-renders!
//   }
  
//   return <button onClick={handleSubmit}>Submit</button>;
// }


// **With synchronous updates:**

// setName('John')  → Re-render #1 (name updated)
// setAge(25)       → Re-render #2 (name + age updated)
// setEmail('j@j')  → Re-render #3 (all updated)
// 3 re-renders = **slow!**

// **With asynchronous updates:**
// setName('John')    → Queued
// setAge(25)         → Queued
// setEmail('j@j')    → Queued
// [Function ends]
// → One re-render with all changes!