import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDom from 'react-dom/client'

// import './App.css'
import './index.css'
import { createBrowserRouter,
  RouterProvider,
 } from "react-router-dom"
import Home from './pages/home'
import Form from './components/Form'
import Scrolling from './Scrolling'

// import { Scroll } from '@react-three/drei'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Scrolling />
  
  
  
  },
  {
    path: "/form",
    element: <Form />,
    errorElement: <div className='text-white font-9xl'>Hey! we encountered and error</div>
   
  },
 
  ])
  ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
