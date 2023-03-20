import { FunctionComponent, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { handleSignOut } from "../../firebase/firebase";

export const LogoutPage: FunctionComponent = () => {
  useEffect(() => {
    (async () => {
      await handleSignOut();
    })();
  }, []);
  return <Navigate to="auth" replace />;
};
