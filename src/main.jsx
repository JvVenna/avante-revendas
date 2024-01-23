import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/routes/Home.jsx'
import About from './components/routes/About.jsx'
import SellMyCar from './components/routes/SellMyCar.jsx'
import Supply from './components/routes/Supply.jsx'
import ErrorPage from './components/routes/ErrorPage.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre",
        element: <About />
      },
      {
        path: "/vender-meu-carro",
        element: <SellMyCar />
      },
      {
        path: "/estoque",
        element: <Supply />
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)