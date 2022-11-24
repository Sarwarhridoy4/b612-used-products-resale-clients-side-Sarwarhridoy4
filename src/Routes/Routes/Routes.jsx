import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from '../../Layout/Main/Main';
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/Signup";
import Error from "../../Pages/Error/Error";
import Blogs from "../../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            
        ]
    }
])

export default router;