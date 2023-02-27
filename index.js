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
  MemberRegistration,
  PrivateRoute,
} from "./src/components/export";
import Dashboard from "./src/components/DashboardComponents/Dashboard";
import VerifyEmailPage from "./src/components/auth/VerifyEmailPage";
import ForgotPassword from "./src/components/auth/ForgotPassword";
import PasswordReset from "./src/components/auth/PasswordResetPages/PasswordReset";
import EmailVerification from "./src/components/auth/EmailVerificationPages/EmailVerification";

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
      {
        path: "register",
        element: <MemberRegistration />,
      },
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
      {
        path: "email-verify",
        element: <VerifyEmailPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-email/:verificationString",
        element: <EmailVerification />,
      },
      {
        path: "reset-password/:passwordResetCode",
        element: <PasswordReset />,
      },
    ],
  },
  {
    path: "/member/:userId/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  ,
]);

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<RouterProvider router={appRouter} />); //(<AppLayout />);
// <RouterProvider router={appRouter}/>

// </RouterProvider>
