import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login";



export const route = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    }
])