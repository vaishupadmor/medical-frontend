import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './index.css';
import Add from "./views/Add/Add"

import Detail from './views/Detail/Detail';
import Home from "./views/Home/Home"


const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
    {
    path:"/",
    element:<Home/>
    },
    {
        path:"/detail/:id",
        element:<Detail/>
    } ,
    {
        path:"/add",
        element:<Add/>
        }
])

root.render(
 
    <> <RouterProvider router={router}/></>
  
);


