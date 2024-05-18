import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Template from './components/Template'
// import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Template />,
    children:[
      {
        path:"",
        element: <Home />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
