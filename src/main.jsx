
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
import AboutUS from './Components/AboutUs/AboutUS';
import ContactUS from './Components/ContactUs/ContactUS';
import ErrorPage from './Components/ErrorPage.jsx/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        loader: () => fetch('/books.json')
      },
      {
        path: '/pages',
        element: <Pages></Pages>,
        loader: () => fetch('/books.json')

      },
      {
        path: '/about',
        element: <AboutUS></AboutUS>
      },
      {
        path: 'contact',
        element: <ContactUS></ContactUS>
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
