import { LoginPage } from "../components/authentication/LoginPage";
import { ProtectedRoute } from "../components/authentication/ProtectedRoute";
import { ErrorPage } from "../components/error/ErrorPage";
import { Info } from "../components/info/Info";
import { GuestTableContainer } from "../components/table/GuestTableContainer";
import { GuestContainer } from "../guest/GuestContainer";

export const GuestRoute = {
  path: "/guest",
  element: (
    <ProtectedRoute>
      <GuestContainer />,
    </ProtectedRoute>
  ),
};

export const AdminRoute = {
  path: "/admin",
  element: (
    <ProtectedRoute>
      <GuestTableContainer />,
    </ProtectedRoute>
  ),
};

export const InfoRoute = {
  path: "/info",
  element: (
    <ProtectedRoute>
      <Info />,
    </ProtectedRoute>
  ),
};

export const AuthRoute = {
  path: "/auth",
  element: <LoginPage />,
};

export const ErrorRoute = {
  path: "/error",
  element: <ErrorPage />,
};
