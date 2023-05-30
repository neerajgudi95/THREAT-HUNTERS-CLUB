import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import Navbar from "./src/components/LandingPageComponents/Navbar/Navbar";
import Footer from "./src/components/LandingPageComponents/Navbar/Footer";
import Loader from "./src/components/LandingPageComponents/loader/Loader";

const Pricing = lazy(() =>
  import("./src/components/LandingPageComponents/Pricing/Pricing")
);
const WhatCyberSec = lazy(() =>
  import("./src/components/LandingPageComponents/feature/WhatCyberSec")
);
const OurGoals = lazy(() =>
  import("./src/components/LandingPageComponents/ourgoals/OurGoals")
);
import Error from "./src/components/LandingPageComponents/Error/Error";

const Login = lazy(() =>
  import("./src/components/LandingPageComponents/auth/Login")
);
const PrivacyPolicy = lazy(() =>
  import("./src/components/LandingPageComponents/Privacy/PrivacyPolicy")
);
const MemberRegistration = lazy(() =>
  import(
    "./src/components/LandingPageComponents/auth/multistepform/MemberRegistration"
  )
);
import PrivateRoute from "./src/components/DashboardComponents/PrivateRoute";

const RefundPolicy = lazy(() =>
  import("./src/components/LandingPageComponents/Privacy/RefundPolicy")
);

const Members = lazy(() =>
  import("./src/components/DashboardComponents/pages/Members")
);
const DashboardHome = lazy(() =>
  import("./src/components/DashboardComponents/pages/DashboardHome")
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
const MemberProfile = lazy(() =>
  import("./src/components/DashboardComponents/pages/MemberProfile")
);
const Quizpage = lazy(() =>
  import("./src/components/DashboardComponents/pages/Quizpage")
);
const InterviewFeedback = lazy(() =>
  import("./src/components/DashboardComponents/pages/InterviewFeedback")
);

import ScrollToTop from "./src/components/ScrollToTop";

const MainApp = lazy(() =>
  import("./src/components/LandingPageComponents/main/MainApp")
);
import { ContextProvider } from "./src/components/DashboardComponents/contexts/ContextProvider";
import { QuizScoreContextProvider } from "./src/components/DashboardComponents/contexts/QuizScoreContext";
import { TimeContextProvider } from "./src/components/DashboardComponents/contexts/TimerContext";

const VerifyEmailPage = lazy(() =>
  import("./src/components/LandingPageComponents/auth/VerifyEmailPage")
);
const ForgotPassword = lazy(() =>
  import("./src/components/LandingPageComponents/auth/ForgotPassword")
);
const PasswordReset = lazy(() =>
  import(
    "./src/components/LandingPageComponents/auth/PasswordResetPages/PasswordReset"
  )
);
const CourseDetails = lazy(() =>
  import("./src/components/LandingPageComponents/CourseDetails/CourseDetails")
);
const EmailVerification = lazy(() =>
  import(
    "./src/components/LandingPageComponents/auth/EmailVerificationPages/EmailVerification"
  )
);
const RegistrationConfirmation = lazy(() =>
  import("./src/components/LandingPageComponents/auth/RegistrationConfirmation")
);
const DashboardApp = lazy(() =>
  import("./src/components/DashboardComponents/DashboardApp")
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
import TestComp from "./src/components/DashboardComponents/tools/TestComp";

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
        element: (
          <Suspense fallback={<Loader />}>
            <MainApp />
          </Suspense>
        ),
      },
      {
        path: "what-is-cyber-sec",
        element: (
          <Suspense fallback={<Loader />}>
            <WhatCyberSec />
          </Suspense>
        ),
      },
      {
        path: "club-goals",
        element: (
          <Suspense fallback={<Loader />}>
            <OurGoals />
          </Suspense>
        ),
      },
      {
        path: "club-privacy",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "refund-policy",
        element: (
          <Suspense fallback={<Loader />}>
            <RefundPolicy />
          </Suspense>
        ),
      },
      {
        path: "pricing",
        element: (
          <Suspense fallback={<Loader />}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: "course-details",
        element: (
          <Suspense fallback={<Loader />}>
            <CourseDetails />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loader />}>
            <MemberRegistration />
          </Suspense>
        ),
      },
      {
        path: "email-verify",
        element: (
          <Suspense fallback={<Loader />}>
            <VerifyEmailPage />
          </Suspense>
        ),
      },
      {
        path: "registration-confirmation",
        element: (
          <Suspense fallback={<Loader />}>
            <RegistrationConfirmation />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<Loader />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "verify-email/:verificationString",
        element: (
          <Suspense fallback={<Loader />}>
            <EmailVerification />
          </Suspense>
        ),
      },
      {
        path: "reset-password/:passwordResetCode",
        element: (
          <Suspense fallback={<Loader />}>
            <PasswordReset />
          </Suspense>
        ),
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
            <QuizModule />{" "}
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
