import React from "react";
import {
    createBrowserRouter,
  } from "react-router";

import Root from '../Pages/Root/Root';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About";
import DoctorDetails from "../Pages/Home/DoctorDetails";
import Blogs from "../Pages/Blogs";
import Bookings from "../Pages/Home/Bookings";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage> ,
      children:[
        {
            index: true,
            loader: ()=>fetch('/6_doctros.json'),
            path: "/home",
            Component:Home ,  
        },
        {
          path:'/DoctorDetails/:id',
          loader: ()=>fetch('/6_doctros.json'),
          Component: DoctorDetails,
        },
        {
          path:'/bookings',
          loader: ()=>fetch('/6_doctros.json'),
          Component: Bookings,
        },
        {
          path:'/blogs',
          Component: Blogs,
        }
        
      ]
    },
  ]); 