import { useState } from 'react'
import './App.css'
import CreatePost from './components/createPost/CreatePost'
import Home from './pages/home/Home'
import Routing from './routing/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routing/>
    </>
  )
}

export default App
