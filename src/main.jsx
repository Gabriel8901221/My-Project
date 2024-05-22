import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ShoesContainer from './Components/Shoes/ShoesContainer.jsx'
import SectionClocks from './Components/clocks/SectionClocks.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContainerCell from './Components/Cell/ContainerCell.jsx'
import SectionNote from './Components/Notebooks/SectionNote.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShoesContainer />
  },
  {
    path: "clocks",
    element: <SectionClocks />
  },
  {
    path: "cell",
    element: <ContainerCell />
  },
  {
    path: "notebooks",
    element: <SectionNote />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
