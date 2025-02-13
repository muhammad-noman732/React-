import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Social from './components/social/Social'
import Project from './components/projects/Project'
import Skills from './components/skills/Skills'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Main/>
     <Social/>
     <Project/>
     <Skills/>
    </>

  )
}

export default App
