import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./src/components/main/App";
import Error from "./src/components/Error/Error";
import Login from "./src/components/auth/Login";
import Register from "./src/components/auth/Register";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<RouterProvider router={appRouter} />);
