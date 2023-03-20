import { FunctionComponent, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { handleSignOut } from "../../firebase/firebase";

export const LogoutPage: FunctionComponent = () => {
  console.log("logout page");
  useEffect(() => {
    (async () => {
      await handleSignOut();
    })();
  }, []);
  return <Navigate to="auth" />;
};
