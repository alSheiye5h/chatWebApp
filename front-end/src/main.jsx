import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Inbox from './pages/Inbox'

const pages = [
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/inbox",
    element: <Inbox />
  }
]

const router = createBrowserRouter(pages);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='main'>
      <RouterProvider router={router} />
    </main>
  </StrictMode>,
)
