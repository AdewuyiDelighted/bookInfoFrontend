import Register from "../features/auth/Register"
import Login from "../features/auth/Login";

export const Routes =[

    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/log-in",
        element:<Login/>
    }
]