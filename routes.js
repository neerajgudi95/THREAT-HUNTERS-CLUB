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
} from "./src/components/Landing page components/export";
import VerifyEmailPage from "./src/components/Landing page components/auth/VerifyEmailPage";
import ForgotPassword from "./src/components/Landing page components/auth/ForgotPassword";
import PasswordReset from "./src/components/Landing page components/auth/PasswordResetPages/PasswordReset";
import ScrollToTop from "./src/components/ScrollToTop";
import MainApp from "./src/components/Landing page components/main/MainApp";
import CourseDetails from "./src/components/Landing page components/CourseDetails/CourseDetails";
import EmailVerification from "./src/components/Landing page components/auth/EmailVerificationPages/EmailVerification";
// import UserDashboard from "./src/components/Dashboard/Member/UserDashboard";
// import AdminDashboard from "./src/components/Dashboard/Admin/AdminDashboard";
// import ClubMembers from "./src/components/Dashboard/Admin/ClubMembers";
// import Notes from "./src/components/Dashboard/Notes";
// import AddMember from "./src/components/Dashboard/Admin/AddMember";
// import MainDashboard from "./src/components/Dashboard/MainDashboard";
import RegistrationConfirmation from "./src/components/Landing page components/auth/RegistrationConfirmation";

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
        path: "registration-confirmation",
        element: <RegistrationConfirmation />,
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
  // {
  //   path: "/member-dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <UserDashboard />
  //     </PrivateRoute>
  //   ),
  //   errorElement: <Error />,
  //   children: [{ path: "notes", element: <Notes /> }],
  // },
  // {
  //   path: "/admin/dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <AdminDashboard />
  //     </PrivateRoute>
  //   ),
  //   errorElement: <Error />,
  //   children: [
  //     { path: "main", element: <MainDashboard /> },
  //     { path: "members", element: <ClubMembers /> },
  //     { path: "notes", element: <Notes /> },
  //     { path: "add-member", element: <AddMember /> },
  //   ],
  // },
  ,
]);
