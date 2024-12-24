import {

  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import './index.css'

import { router } from "./Routes/routes.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById('root')).render(
  
  <StrictMode>


  <RouterProvider router={router} />


  </StrictMode>,
)
