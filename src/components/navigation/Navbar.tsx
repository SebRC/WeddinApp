import { FunctionComponent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { handleSignOut } from "../../firebase/firebase";
import { PageLayout } from "../layout/pageLayout/PageLayout";
import { AuthRoute } from "../../routing/routes";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

export const Navbar: FunctionComponent = () => {
  const location = useLocation();
  const user = useCurrentUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await handleSignOut();
    navigate(AuthRoute.path);
  };

  return (
    <>
      <DesktopNavbar onLogout={handleLogout} user={user} location={location} />
      <MobileNavbar onLogout={handleLogout} user={user} location={location} />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};
