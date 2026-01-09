import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Pages/Home'
import PricingPage from './Pages/Pricing'
import About from './Pages/About'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/about', element: <About /> },
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App