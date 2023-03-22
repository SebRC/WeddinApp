import { User } from "firebase/auth";
import { FunctionComponent, ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { ErrorRoute } from "../../routing/routes";

interface ProtectedRouteProps {
  children: ReactNode;
  user?: User | null;
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ user, children }) => {
  useEffect(() => {
    console.log("user changed", user?.email);
  }, [user]);
  const currentUser = useCurrentUser();
  console.log("user in protected route", currentUser);
  if (user?.email !== "martin@ahosrcwedding.com") {
    return <Navigate to={ErrorRoute.path} replace />;
  }

  return <>{children}</>;
};
