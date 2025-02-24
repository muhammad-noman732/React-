import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const[toggle ,setToggle ] = useState(false)
  const incrementCounter = () => {
    setCount(prev => prev + 1);
  };

  const decrementCounter = () => {
    setCount(prev => prev > 0 ? prev- 1 : 0);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const toggleMode = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className= {toggle ?"on":"off"  }>
      <h1 className='heading'>Pulse Counter</h1>
      {
        toggle ? (
          <FontAwesomeIcon 
          style={{color:"white"}}
          onClick={toggleMode} icon={faToggleOn} size="3x" className="toggle-icon"
           />
       ):(
      
        <FontAwesomeIcon 
        onClick={toggleMode} icon={faToggleOff}  size="3x" className="toggle-icon"
         />
       )
      }
      
      <h2 className='count'>{count}</h2>
      <div className="buttons">
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button className='reset' onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default App;
