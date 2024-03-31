import Register from "../features/auth/Register"
import Login from "../features/auth/Login";
import Menu from "../features/Menu";

export const Routes =[

    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/log-in",
        element:<Login/>
    },
    {
        path:"/menu",
        element:<Menu/>
    }
]