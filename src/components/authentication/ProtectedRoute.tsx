import { User } from "firebase/auth";
import { FunctionComponent, ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { ErrorRoute } from "../../routing/routes";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ children }) => {
  const currentUser = useCurrentUser();
  console.log("user in protected route", currentUser);
  if (currentUser?.email !== "martin@ahosrcwedding.com") {
    return <Navigate to={ErrorRoute.path} replace />;
  }

  return <>{children}</>;
};
