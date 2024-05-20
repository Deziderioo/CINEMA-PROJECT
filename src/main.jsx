import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { NewAccount } from './NewAccount.jsx';

import './globalStyle.css'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/newaccount",
    element: <NewAccount/>,
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
