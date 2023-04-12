import { LoginPage } from "../components/authentication/LoginPage";
import { ProtectedRoute } from "../components/authentication/ProtectedRoute";
import { ErrorPage } from "../components/error/ErrorPage";
import { GiftsContainer } from "../components/gift/GiftsContainer";
import { Info } from "../components/info/Info";
import { PageLayout } from "../components/layout/pageLayout/PageLayout";
import { GuestContainer } from "../components/guest/GuestContainer";
import { Roles } from "../components/authentication/Roles";
import { Settings } from "../components/settings/Settings";
import { AdminPage } from "../components/admin/AdminPage";

export const GuestRoute = {
  path: "/guest",
  element: (
    <ProtectedRoute>
      <GuestContainer />
    </ProtectedRoute>
  ),
};

export const AdminRoute = {
  path: "/admin",
  element: (
    <ProtectedRoute requiredRole={Roles.Admin}>
      <AdminPage />
    </ProtectedRoute>
  ),
};

export const InfoRoute = {
  path: "/info",
  element: (
    <ProtectedRoute>
      <Info />
    </ProtectedRoute>
  ),
};

export const GiftsRoute = {
  path: "/gifts",
  element: (
    <ProtectedRoute>
      <GiftsContainer />
    </ProtectedRoute>
  ),
};

export const SettingsRoute = {
  path: "/settings",
  element: <Settings />,
};

export const AuthRoute = {
  path: "/auth",
  element: (
    <PageLayout>
      <LoginPage />
    </PageLayout>
  ),
};

export const ErrorRoute = {
  path: "/error",
  element: <ErrorPage />,
};
