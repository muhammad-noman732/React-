import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiData, setApiData] = useState([])

 const fetching= async ()=>{
  const response = await fetch("http://localhost:8000/products");
  console.log("response" , response);
    const data = await response.json()
    console.log("data" , data);
    setApiData(data)
  }
 
  useEffect(()=>{
        fetching()     
  },[])

  return (
    <>
     <h1>fetching api from backend </h1>
     {
      apiData.map((data)=>(
        <div key={data.id}>
          <h5>{data.name}</h5>
          <p>{data.category}</p>
          <p>{data.description}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
