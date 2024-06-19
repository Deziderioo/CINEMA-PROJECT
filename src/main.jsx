import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { NewAccount } from './NewAccount.jsx';
import { Login } from './Login.jsx'

import './globalStyle.css'
import TopFilms from './TopFilms.jsx';
import { Contact } from './Contato.jsx';
import { User } from './User.jsx';
import MovieBooking from './MovieBooking.jsx';
import Credits from './Credits.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/newaccount",
    element: <NewAccount/>,
  },
  {
    path: "/topfilms",
    element: <TopFilms/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/movieBooking",
    element: <MovieBooking/>,
  },
  {
    path: "/credits",
    element: <Credits/>,
  },  
  {
    path: "/login",
    element: <Login/>,
  }, 
  {
    path: "/User",
    element: <User/>,
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
