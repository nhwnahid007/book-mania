
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
import BookDetails from './Components/BookDetails/BookDetails';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'',
        element: <Home></Home>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader:()=> fetch(`../books.json`)

      },
      {
        path:'/listed',
        element: <Listed></Listed>,
        
      },
      {
        path: '/pages',
        element: <Pages></Pages>
      }
    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router} />
  <Toaster></Toaster>
  </>,
)
