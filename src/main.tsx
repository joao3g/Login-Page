import React from 'react'
import ReactDOM from 'react-dom/client'

import { Login } from "./pages/Login/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ErrorPage } from './pages/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
