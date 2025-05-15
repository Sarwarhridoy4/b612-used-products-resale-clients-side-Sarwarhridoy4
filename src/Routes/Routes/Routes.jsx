import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/Signup";
import Error from "../../Pages/Error/Error";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryDetailse from "../../CategoryDetailse/CategoryDetailse";
import Private from "../Private/Private";
import Dashboard from "../../Layout/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../Layout/Dashboard/MyOrder/MyOrder";
import AllBuyer from "../../Layout/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Layout/Dashboard/AllSeller/AllSeller";
import AddProduct from "../../Layout/Dashboard/AddProduct/AddProduct";
import MyProduct from "../../Layout/Dashboard/MyProduct/MyProduct";
import ComingSoon from "../../Pages/ComingSoon/ComingSoon";

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
        path: "/coming-soon",
        element: <ComingSoon></ComingSoon>
      },
      {
        path: "/category/:id",
        loader: async ({ params }) => {
          // console.log(params);
          return fetch(
            `https://mobile-resell-bd-server-sarwarhridoy4.vercel.app/products/${params.id}`
          );
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
    children: [
      {
        path: "/dashboard",
        loader: async ({ params }) => {
          console.log(params.email);
          return fetch(
            `https://mobile-resell-bd-server-sarwarhridoy4.vercel.app/bookings/${params.email}`
          );
        },
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/allbuyer",
        element: <AllBuyer></AllBuyer>,
      },
      {
        path: "/dashboard/allseller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/add-a-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/my-product",
        element: <MyProduct></MyProduct>,
      },
    ],
  },
]);

export default router;
