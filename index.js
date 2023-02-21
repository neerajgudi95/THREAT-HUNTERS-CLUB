import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ScrollToTop from "./src/components/ScrollToTop";
import MainApp from "./src/components/main/MainApp";

import {
  WhatCyberSec,
  OurGoals,
  OurTeam,
  Error,
  Login,
  Navbar,
  Footer,
  PrivacyPolicy,
  Pricing,
  // MultiStepForm,
} from "./src/components/export";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainApp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "register",
      //   element: <MultiStepForm />,
      // },
      {
        path: "what-is-cyber-sec",
        element: <WhatCyberSec />,
      },
      {
        path: "club-goals",
        element: <OurGoals />,
      },
      {
        path: "our-team",
        element: <OurTeam />,
      },
      {
        path: "club-privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/dashboard/:userId",
    element: <PrivacyPolicy />,
  },
]);

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<RouterProvider router={appRouter} />); //(<AppLayout />);
// <RouterProvider router={appRouter}/>

// </RouterProvider>
