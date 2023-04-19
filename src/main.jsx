import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Orders from './components/Orders';
import Shop from './components/Shop';
import AuthProviders from './AuthProviders/AuthProviders';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import PhoneVerify from './components/PhoneVerify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/phoneverify',
        element: <PhoneVerify></PhoneVerify>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/shopping',
        element:<Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>

  </React.StrictMode>,
)
