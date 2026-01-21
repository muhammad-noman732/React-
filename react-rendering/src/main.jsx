import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './keyIndexIssue/List.js'
import Clock from './keyRealUseCase/Clock.jsx'

createRoot(document.getElementById('root')).render(
 
    // <List />
    <Clock/>
)
