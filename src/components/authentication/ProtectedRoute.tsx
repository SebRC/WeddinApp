import { FunctionComponent, ReactNode } from "react";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { ErrorPage } from "../error/ErrorPage";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ children }) => {
  const currentUser = useCurrentUser();
  if (!currentUser.authed) {
    return <ErrorPage />;
  }

  return <>{children}</>;
};
