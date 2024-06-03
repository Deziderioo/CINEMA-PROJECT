import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { NewAccount } from './NewAccount.jsx';

import './globalStyle.css'
import TopFilms from './TopFilms.jsx';
import { Contact } from './Contato.jsx';
import MovieBooking from './MovieBooking.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
