import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './component/SHOP/Shop';
import Home from './component/Layout/Home';
import Orders from './component/Oders/Oders';
import Inventory from './component/Inverntory/Inventroy';
import Login from './component/SHOP/Login/Login';

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home></Home>,
    children : [
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path: '/orders',
        element:<Orders></Orders>
      },
      {
        path: '/Inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
