import { createBrowserRouter, useParams } from "react-router";
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
import UpdateItems from "../Dashboard/UpdateItems";
import PaymentPage from "../Dashboard/PaymentPage";
import PaymentHistory from "../Dashboard/PaymentHistory";
import axios from "axios";
import UserHome from "../Dashboard/UserHome/UserHome";


export let router = 



// const {id}=useParams();

createBrowserRouter([

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
      path:'/dashboard/userhome',
      element:<UserHome></UserHome>

  },
  
    {
      path:'/dashboard/adminhome',
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
  },
  {
    path:'/dashboard/edit/:id',
  element:<UpdateItems></UpdateItems> ,
  loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`) 
 },
 {
  path:"/dashboard/payment",
  element:<PaymentPage></PaymentPage>,
  
 },


 {
  path:"/dashboard/payment-history/:email",
  element:<PaymentHistory></PaymentHistory>,
  loader:async({params})=>{

    
    const res= axios.post(`http://localhost:5000/paymenthistory/${params.email}`)
    
    return res
    
    }
 }




  ]
}


]);
