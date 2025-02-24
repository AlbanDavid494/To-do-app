import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import TodoApp from './Components/TodoApp/TodoApp.jsx'

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <TodoApp />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
