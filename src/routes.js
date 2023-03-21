import { createBrowserRouter, Outlet } from "react-router-dom";
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
import ScrollToTop from "./src/components/ScrollToTop";
import MainApp from "./src/components/main/MainApp";
import CourseDetails from "./src/components/CourseDetails/CourseDetails";

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
export const routes = createBrowserRouter([
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
        path: "course-details",
        element: <CourseDetails />,
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  ,
]);
