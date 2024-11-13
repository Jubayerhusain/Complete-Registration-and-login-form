import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContuctUs from "./Pages/ContuctUs";
import Login from "./components/Login";
import Registration from "./components/Registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contactUs",
        element: <ContuctUs></ContuctUs>,
      },
      {
        path:'signIn',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<Registration></Registration>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
