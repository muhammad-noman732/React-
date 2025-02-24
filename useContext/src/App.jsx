import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

// step1 - create context
    // const UserContext = createContext();
//step2 - wrap all the child inside the provider
// step3 -pass the value
// step4 - consumer k andar ja kr consume krlo



const ThemeContext = createContext()

function App() {

  // const [user, setUser] = useState({
  //   name:"noman"
  // })


   const[theme , setTheme] = useState("light")
  return (
    <>
       {/* <UserContext.Provider value={user}>
      <ChildA/>
      </UserContext.Provider> */}


      <ThemeContext.Provider value={{theme , setTheme}}>
        <div className="container" style={{backgroundColor:theme==='dark'? 'black':"beige"}}>
                  <ChildA/>
        </div>
          
      </ThemeContext.Provider>
    </>
  )
}


export default App
// export {UserContext}
export {ThemeContext}