import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../Layouts/Layout";
import Menubar from "../Menubar";

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
    }

],
  

},
]);
