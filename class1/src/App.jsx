import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Button from './Button';

function App() {
            const [count, setCount] = useState(0)
  return (
    <div>


      {/* this is single page application because we have only one index.html file 
      we use main jsx where get the root div element of html and render App component which
      contain all the components of web app . jsx is not valid syntax means broewer could not 
      uderstand it . Browser only understand HTML ,CSS , and JS so react has compilers 
      which convert it code into javascript like(Babel as compiler)
      
       */}
      {/* <Button/> */}

      {/* <h1>Hello world</h1>
      <Header name="noman"/> */}



      {/*  A simple counter using components , prop and useState */}
       
       <h1>Counter App</h1>
      <p>count :{count}</p>
      {/* using props  */}
       <div className='btn'>
       <Button text="increase" onClick={()=> setCount(count+ 1)} />
       <Button text="decrease" onClick={()=> setCount(count - 1)} />
       <Button text="Reset"    onClick={()=> setCount(0)} />

       </div>
     

             {/*    witout props */}

      {/* <button onClick={()=> setCount(count+ 1)}>increase</button>
          <button onClick={()=> setCount(count -1 )}>decrease</button>
          <button onClick={()=> setCount(0 )}>Reset </button>
      */}

    </div>
  )
}

export default App
