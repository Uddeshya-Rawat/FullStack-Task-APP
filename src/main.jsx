import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AllTask from './Pages/AllTask.jsx'
import CreateTask from './Pages/CreateTask.jsx'
import TaskContextProvider from './Context/TaskContexProvidert.jsx'
import TaskDetails from './Pages/TaskDetails.jsx'


const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
   path:"/allTask",
   element:<AllTask/>
  },
  {
    path:"createTask",
    element:<CreateTask/>
  },
  {
    path:"/task/:id",
    element:<TaskDetails/>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <TaskContextProvider><RouterProvider router={routes}></RouterProvider></TaskContextProvider>
  </StrictMode>,
)
