import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Courses from './components/Courses'

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/courses",
        element: <Courses />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}></RouterProvider>
  </React.StrictMode>
)
