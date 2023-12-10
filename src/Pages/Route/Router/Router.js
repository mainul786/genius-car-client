import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../../layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }

])

export default router;