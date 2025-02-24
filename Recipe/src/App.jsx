import { useEffect, useState } from 'react'
import { GiKnifeFork } from 'react-icons/gi';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './components/search/Search'
import Recipe from './components/detailRecipe/Recipe'
import Searched from './pages/searched/Searched';
import './app.css';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // Parent layout component
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'recipe/:id',
        element: <Recipe />
      },
      {
        path: 'searched/:searchTerm',
        element: <Searched />
      }
    ]
  }
]);

// Layout component containing shared UI
function AppLayout() {
  return (
    <div>
      <nav>
        <GiKnifeFork />
        Delicious
      </nav>
      <Search />
      <Outlet /> {/* This renders the matched child route */}
    </div>
  )
}

// Main App component with RouterProvider
function App() {
  return <RouterProvider router={router} />;
}

export default App;