import { createBrowserRouter } from "react-router";
import App from "../App";
import Layout from "../Layouts/Layout";

export let router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
        
        {
        path:'/',
        element:<App></App>
    }

],
  

},
]);
