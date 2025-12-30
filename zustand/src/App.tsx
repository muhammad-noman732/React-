import React from "react"
import { useHabitStore } from "./store/store";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitLIst";

const App = () => {
  const habits = useHabitStore()
  console.log(habits);
  
  return (
    <div>
   <AddHabit/>
   <HabitList/>
      
    </div>
  )
}

export default App
