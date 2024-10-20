import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout";
import ModalProvider from "@context/ModalProvider";
import { lazy } from "react";
import { ThemeProvider } from "@mui/material";
const HomePage = lazy(() => import("@pages/HomePage"));
import theme from "./configs/muiConfig";
import RegisterPage from "@pages/auth/RegisterPage";
import AuthLayout from "@pages/auth/AuthLayout";
import LoginPage from "@pages/auth/LoginPage";
import OTPVerifyPage from "@pages/auth/OTPVerifyPage";
import { Provider } from "react-redux";
import { persistor, store } from "@redux/store";
import ResetPassword from "@pages/auth/ResetPassword";
import ForgotPassword from "@pages/auth/ForgotPassword";
import VerifyEmail from "@pages/auth/VerifyEmail";
import ProtectedLayout from "@pages/ProtectedLayout";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/verity-otp",
            element: <OTPVerifyPage />,
          },
          {
            path: "/reset-password",
            element: <ResetPassword />,
          },
          {
            path: "/forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "/verify-email",
            element: <VerifyEmail />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
);
