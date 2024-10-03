import Layout from "../components/Layout";
import Home from  "../components/Home";
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
    }
])

export default router