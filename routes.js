import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import Navbar from "./src/components/LandingPageComponents/Navbar/Navbar";
import Footer from "./src/components/LandingPageComponents/Navbar/Footer";
import Loader from "./src/components/LandingPageComponents/loader/Loader";
import Pricing from "./src/components/LandingPageComponents/Pricing/Pricing";
import WhatCyberSec from "./src/components/LandingPageComponents/feature/WhatCyberSec";
import OurGoals from "./src/components/LandingPageComponents/ourgoals/OurGoals";
import Error from "./src/components/LandingPageComponents/Error/Error";
import Login from "./src/components/LandingPageComponents/auth/Login";
import PrivacyPolicy from "./src/components/LandingPageComponents/Privacy/PrivacyPolicy";
import MemberRegistration from "./src/components/LandingPageComponents/auth/multistepform/MemberRegistration";
import RefundPolicy from "./src/components/LandingPageComponents/Privacy/RefundPolicy";
import MainApp from "./src/components/LandingPageComponents/main/MainApp";
import VerifyEmailPage from "./src/components/LandingPageComponents/auth/VerifyEmailPage";
import ForgotPassword from "./src/components/LandingPageComponents/auth/ForgotPassword";
import PasswordReset from "./src/components/LandingPageComponents/auth/PasswordResetPages/PasswordReset";
import CourseDetails from "./src/components/LandingPageComponents/CourseDetails/CourseDetails";
import EmailVerification from "./src/components/LandingPageComponents/auth/EmailVerificationPages/EmailVerification";
import RegistrationConfirmation from "./src/components/LandingPageComponents/auth/RegistrationConfirmation";

import PrivateRoute from "./src/components/DashboardComponents/PrivateRoute";
import ScrollToTop from "./src/components/ScrollToTop";

import { ContextProvider } from "./src/components/DashboardComponents/contexts/ContextProvider";
import { QuizScoreContextProvider } from "./src/components/DashboardComponents/contexts/QuizScoreContext";
import { TimeContextProvider } from "./src/components/DashboardComponents/contexts/TimerContext";
import Gallery from "./src/components/LandingPageComponents/Gallery/Gallery";

const DashboardApp = lazy(() =>
  import("./src/components/DashboardComponents/DashboardApp")
);

const DashboardHome = lazy(() =>
  import("./src/components/DashboardComponents/pages/DashboardHome")
);

const QuizModule = lazy(() =>
  import("./src/components/DashboardComponents/tools/QuizModule")
);
const FeedbackForm = lazy(() =>
  import("./src/components/DashboardComponents/tools/FeedbackForm")
);
const Leaderboard = lazy(() =>
  import("./src/components/DashboardComponents/tools/Leaderboard")
);

const MemberProfile = lazy(() =>
  import("./src/components/DashboardComponents/pages/MemberProfile")
);

const Members = lazy(() =>
  import("./src/components/DashboardComponents/pages/Members")
);

const Notes = lazy(() =>
  import("./src/components/DashboardComponents/pages/Notes")
);

const DashChat = lazy(() =>
  import("./src/components/DashboardComponents/pages/DashChat")
);

const Videos = lazy(() =>
  import("./src/components/DashboardComponents/pages/Videos")
);

const Quizpage = lazy(() =>
  import("./src/components/DashboardComponents/pages/Quizpage")
);

const InterviewFeedback = lazy(() =>
  import("./src/components/DashboardComponents/pages/InterviewFeedback")
);

// import TestComp from "./src/components/LandingPageComponents/TestComp";

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
        path: "refund-policy",
        element: <RefundPolicy />,
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
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "register",
      //   element: <MemberRegistration />,
      // },
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
      <Suspense fallback={<Loader />}>
        <PrivateRoute>
          <ContextProvider>
            <QuizScoreContextProvider>
              <TimeContextProvider>
                <SnackbarProvider
                  maxSnack={1}
                  autoHideDuration={5000}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  {/* <Suspense fallback={<Loader />}> */}
                  <DashboardApp />
                  {/* </Suspense> */}
                </SnackbarProvider>
              </TimeContextProvider>
            </QuizScoreContextProvider>
          </ContextProvider>
        </PrivateRoute>
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      // {
      //   path: "test",
      //   element: <TestComp />,
      // },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <MemberProfile />
          </Suspense>
        ),
      },
      {
        path: "members",
        element: (
          <Suspense fallback={<Loader />}>
            <Members />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<Loader />}>
            <DashboardHome />
          </Suspense>
        ),
      },
      {
        path: "notes",
        element: (
          <Suspense fallback={<Loader />}>
            <Notes />
          </Suspense>
        ),
      },
      {
        path: "discussion",
        element: (
          <Suspense fallback={<Loader />}>
            <DashChat />
          </Suspense>
        ),
      },
      {
        path: "recordings",
        element: (
          <Suspense fallback={<Loader />}>
            <Videos />
          </Suspense>
        ),
      },
      {
        path: "quiz",
        element: (
          <Suspense fallback={<Loader />}>
            <Quizpage />
          </Suspense>
        ),
      },
      {
        path: "interview-feedback",
        element: (
          <Suspense fallback={<Loader />}>
            <FeedbackForm />
          </Suspense>
        ),
      },
      {
        path: "feedback",
        element: (
          <Suspense fallback={<Loader />}>
            <InterviewFeedback />
          </Suspense>
        ),
      },
      {
        path: "quiz/:moduleId",
        element: (
          <Suspense fallback={<Loader />}>
            <QuizModule />
          </Suspense>
        ),
      },
      {
        path: "leaderboard",
        element: (
          <Suspense fallback={<Loader />}>
            <Leaderboard />
          </Suspense>
        ),
      },
    ],
  },
  ,
]);
