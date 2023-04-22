import { createBrowserRouter, Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import {
  WhatCyberSec,
  OurGoals,
  Error,
  Login,
  Navbar,
  Footer,
  PrivacyPolicy,
  Pricing,
  MemberRegistration,
  PrivateRoute,
} from "./src/components/export";
import {
  Members,
  DashboardHome,
  Notes,
  DashChat,
  Videos,
  MemberProfile,
  Quizpage,
  InterviewFeedback,
} from "./src/components/DashboardComponents/exports";
import VerifyEmailPage from "./src/components/Landing page components/auth/VerifyEmailPage";
import ForgotPassword from "./src/components/Landing page components/auth/ForgotPassword";
import PasswordReset from "./src/components/Landing page components/auth/PasswordResetPages/PasswordReset";
import ScrollToTop from "./src/components/ScrollToTop";
import MainApp from "./src/components/Landing page components/main/MainApp";
import CourseDetails from "./src/components/Landing page components/CourseDetails/CourseDetails";
import EmailVerification from "./src/components/Landing page components/auth/EmailVerificationPages/EmailVerification";
import RegistrationConfirmation from "./src/components/Landing page components/auth/RegistrationConfirmation";
import DashboardApp from "./src/components/DashboardComponents/DashboardApp";
import { ContextProvider } from "./src/components/DashboardComponents/contexts/ContextProvider";
import QuizModule from "./src/components/DashboardComponents/tools/QuizModule";
import { QuizScoreContextProvider } from "./src/components/DashboardComponents/contexts/QuizScoreContext";
import { TimeContextProvider } from "./src/components/DashboardComponents/contexts/TimerContext";
import FeedbackForm from "./src/components/DashboardComponents/tools/FeedbackForm";

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
    element: (
      <SnackbarProvider
        maxSnack={1}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <AppLayout />
      </SnackbarProvider>
    ),
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <ContextProvider>
          <QuizScoreContextProvider>
            <TimeContextProvider>
              <SnackbarProvider
                maxSnack={1}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <DashboardApp />
              </SnackbarProvider>
            </TimeContextProvider>
          </QuizScoreContextProvider>
        </ContextProvider>
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "profile",
        element: <MemberProfile />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "discussion",
        element: <DashChat />,
      },
      {
        path: "recordings",
        element: <Videos />,
      },
      {
        path: "quiz",
        element: <Quizpage />,
      },
      {
        path: "interview-feedback",
        element: <FeedbackForm />,
      },
      {
        path: "feedback",
        element: <InterviewFeedback />,
      },
      { path: "quiz/:moduleId", element: <QuizModule /> },
      // {
      //   path: "games",
      //   element: <DashGames />,
      // },
    ],
  },
  // {
  //   path: "/user/dashboard",
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
