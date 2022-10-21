import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Home from "../components/Home/Home";
import Hotels from "../components/Hotels/Hotels";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import MainLayout from "../MainLayout/MainLayout";

export const routes = createBrowserRouter([
      {
        path:'/',
        element:<MainLayout/>,
        children: [
            {
                path:'/booking',
                element:<Booking/>
            },
            {
                path:'/hotels',
                element:<Hotels/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
        ]
      }
])