import { FunctionComponent, ReactNode } from "react";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { ErrorPage } from "../error/ErrorPage";
import { Roles } from "./Roles";

interface ProtectedRouteProps {
  requiredRole?: Roles;
  children: ReactNode;
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ requiredRole, children }) => {
  const currentUser = useCurrentUser();
  if (!currentUser.authed || (requiredRole && currentUser?.role !== requiredRole)) {
    return <ErrorPage />;
  }

  return <>{children}</>;
};
