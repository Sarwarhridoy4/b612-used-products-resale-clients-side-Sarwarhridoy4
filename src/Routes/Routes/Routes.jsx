import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/Signup";
import Error from "../../Pages/Error/Error";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryDetailse from "../../CategoryDetailse/CategoryDetailse";
import Private from "../Private/Private";
import Dashboard from "../../Layout/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/category/:id",
        loader: async ({ params }) => {
          // console.log(params);
          return fetch(`http://localhost:5000/products/${params.id}`);
        },
        element: (
          <Private>
            <CategoryDetailse></CategoryDetailse>
          </Private>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <Dashboard></Dashboard>
      </Private>
    ),
    errorElement: <Error></Error>,
    children: [],
  },
]);

export default router;
