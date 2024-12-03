import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDom from 'react-dom/client'
import Review from './pages/reviews'
import './App.css'
import './index.css'
import { createBrowserRouter,
  RouterProvider,
 } from "react-router-dom"
import Home from './pages/home'
import Features from './pages/features'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  
  
  
  },
  {
    path: "/features",
    element: <Features />
  },
  {
    path: "/reviews",
    element: <Review />
  },
  ])
  ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
