import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider as Tisna} from 'react-router-dom'
import "./index.css"
import Dashboard from "./blog/dasboard/Dashboard"
import Detail from './blog/Detail/Detail.jsx'
import About from './blog/About/About.jsx'
import Shop from './blog/Shop/Shop.jsx'

const Router = createBrowserRouter([
  {
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Dashboard/>
    },
    {
      path:'/about',
      element:<About/>
    },
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tisna router={Router}/>
  </React.StrictMode>,
)