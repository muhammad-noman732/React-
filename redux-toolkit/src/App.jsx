import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, Reset } from './feature/counter/counterSlice';
import { useState } from 'react';

function App() {
         const[amount , setAmount] = useState(0)
     // agar store se koi data lena h to uske liye useSlector use krty h
    const count = useSelector((state)=> state.counter.value);
    const dispatch  = useDispatch();
    console.log(count);
    
    const handeIncrementClick = ()=>{
      console.log("increment button is clicked");
      // jb bhi trigger ho to action call hoga
      // jb button pr click hoga to increment wala acton chle ga 
      dispatch(increment());
    }

  const handeDecrementClick = ()=>{
    console.log("decrement butto is clicked");
    dispatch(decrement());
  }

  const handleResetClick = ()=>{
        dispatch(Reset())
  }

  const increaseByAmountHandler = ()=>{
         dispatch(incrementByAmount(amount))
  }

  return (
         <div>
          <button onClick={handeIncrementClick}>+</button><br />
          <p>Count:{count}</p>
          <button onClick={handeDecrementClick}>-</button><br />
          <button onClick={handleResetClick}>Reset</button><br />
          <input 
          type="number"
          value={amount}
          onChange={(e)=>{setAmount(e.target.value)}} 
          />
          <br />
          <button onClick={increaseByAmountHandler}>Inc By Amount</button>
         </div>
  )
}

export default App
