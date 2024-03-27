import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Listed from './Components/Listed/Listed';
import Pages from './Components/Pages/Pages';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'',
        element: <Home></Home>,
        loader: () => fetch('books.json')
      },
      {
        path:'/listed',
        element: <Listed></Listed>
      },
      {
        path: '/pages',
        element: <Pages></Pages>
      }
    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />

  </React.StrictMode>,
)
