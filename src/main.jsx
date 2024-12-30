import {
  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import './index.css';

import { router } from "./Routes/routes.jsx";
import { StrictMode } from "react";
import Authprovider from "./Authprovider/Authprovider.jsx";

// Import TanStack Query's QueryClient and QueryClientProvider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap everything in Authprovider */}
    <Authprovider>
      {/* Wrap the app in QueryClientProvider with the created queryClient */}
      <QueryClientProvider client={queryClient}>
        {/* Wrap your router inside this */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Authprovider>
  </StrictMode>,
);
