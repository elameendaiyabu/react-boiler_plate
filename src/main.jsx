import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './pages/ErrorPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
