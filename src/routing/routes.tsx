import { LoginPage } from "../components/authentication/LoginPage";
import { ProtectedRoute } from "../components/authentication/ProtectedRoute";
import { ErrorPage } from "../components/error/ErrorPage";
import { Info } from "../components/info/Info";
import { GuestTableContainer } from "../components/table/GuestTableContainer";
import { GuestContainer } from "../guest/GuestContainer";

export const GuestRoute = {
  path: "/guest",
  element: <GuestContainer />,
};

export const AdminRoute = {
  path: "/admin",
  element: <GuestTableContainer />,
};

export const InfoRoute = {
  path: "/info",
  element: <Info />,
};

export const AuthRoute = {
  path: "/auth",
  element: <LoginPage />,
};

export const ErrorRoute = {
  path: "/error",
  element: <ErrorPage />,
};
