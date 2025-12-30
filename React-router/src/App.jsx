// import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './pages/home/Home'
import About from './pages/about/About'
import Dashboard from './pages/dashboard/Dashboard'
import Navbar from "./pages/navbar/Navbar";
import './app.css'
import Params from "./pages/params/Params";
import Courses from './pages/courses/Courses';
import MockTest from "./pages/mockTest/MockTest";
import Reports from "./pages/reports/Reports";
import NotFound from "./pages/notfound/NotFound";
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:
//       <div>
//       <Navbar/>
//       <Home/>
//     </div>
    
//   },
  
//   {
//     path:'about',
//     element:
//     <div>
//     <Navbar/>
//     <About/>
//     </div>
   
//   },

//   {
//     path:'dashboard',
//     element:
//     <div>
//     <Navbar/>
//     <Dashboard/>
//     </div>,
//     children:[
//       {
//           path:"courses",
//           element:<Courses/>
//       },
//       {
//         path:'mock-test',
//         element:<MockTest/>
//       },
//       {
//         path:"reports",
//         element:<Reports/>
//       }
//     ]
//   },

//   {
//     path:'*',
//     element:
//     <div>
//     <Navbar/>
//     <NotFound/>
//     </div>
   
//   },
  
//   {
//     path:'student/:id',
//     element:
//     <div>
//     <Navbar/>
//     <Params/>
//     </div>
//   }
// ])

// function App() {
//   return(
//     <div>
//     <RouterProvider router={router}/>
//     </div>
//   )
 
// }

// export default App;



// anohter merthod
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ProctedRoutes from './pages/ProctedRoutes';


const App = () => {
  return (
   
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
            {/* Parent Route */}
        <Route path='/dashboard' element={<ProctedRoutes><Dashboard/></ProctedRoutes>}>
          {/* Nested Routes */}
           <Route path="courses" element={<Courses />} />
           <Route path="mock-test" element={<MockTest />} />
        </Route>
          
          <Route path='/:id' element={<Params/>}/>
        </Routes>

      </BrowserRouter>
      
  
  )
}

export default App

