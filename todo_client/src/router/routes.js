import Layout from "../components/Layout";
import Home from  "../components/Home";
import Login from '..//components/Login'
import Signup from '..//components/Signup'
import YourTodo from "../components/YourTodo";

import {
    createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: ([
            {path: '/',  element: <Home />},
            { path: '/yourtodo', element: <YourTodo /> }
        ])
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    }
    

])

export default router