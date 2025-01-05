import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../Layouts/Layout";
import Menubar from "../Menubar";
import OurShopPages from "../OurShopPages";
import Login from "../Login";
import Register from "../Register";
import PrivateRoute from "./PrivateRoute";

import DashboardLayout from "../Layouts/DashboardLayout";
import Cart from "../Dashboard/Cart";
import Home from "../Dashboard/Home";
import DashbardDefaultPage from "../Dashboard/DashbardDefaultPage";
import Users from "../Dashboard/Users";
import AddItems from "../Dashboard/AddItems";
import ManageItems from "../Dashboard/ManageItems";


export let router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
        
        {
        path:'/',
        element:<App></App>
    },
    {
      path:'/menu',
      element:<Menubar></Menubar>
    },
    {path:'/shop',
      element:<OurShopPages></OurShopPages>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    // {
    //   path:'/dashboard',
    //   element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    // }

],
  
},

// adding Dashboard board route
{
  path:'/dashboard',
  element:<DashboardLayout></DashboardLayout>,
  children:[
    {
      path:'/dashboard',
      element:<DashbardDefaultPage></DashbardDefaultPage>

  },
    {
        path:'/dashboard/carts',
        element:<Cart></Cart>

    },
    {
      path:'/dashboard/home',
      element:<Home></Home>

  },
  {
    path:'/dashboard/users',
    element:<Users></Users>
  },
  {
    path:'/dashboard/additems',
    element:<AddItems></AddItems>
  },
  {
    path:'/dashboard/manageitems',
    element:<ManageItems></ManageItems>
  }

  ]
}


]);
