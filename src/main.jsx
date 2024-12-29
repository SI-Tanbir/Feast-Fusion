import {

  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import './index.css'

import { router } from "./Routes/routes.jsx";
import { StrictMode } from "react";
import Authprovider from "./Authprovider/Authprovider.jsx";

createRoot(document.getElementById('root')).render(
  
  <StrictMode>

    <Authprovider>

  <RouterProvider router={router} />   

    </Authprovider>



  </StrictMode>,
)
