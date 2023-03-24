import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { IconLogout } from "../icons/IconLogout";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { handleSignOut } from "../../firebase/firebase";
import { PageLayout } from "../layout/pageLayout/PageLayout";
import { AdminRoute, AuthRoute, GiftsRoute, GuestRoute, InfoRoute } from "../../routing/routes";

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
      <div className={styles.navbar}>
        {user.authed && (
          <>
            <Link
              to={GuestRoute.path}
              className={location.pathname.includes(GuestRoute.path) ? `${styles.active}` : ""}
            >
              Gæst
            </Link>
            <Link to={InfoRoute.path} className={location.pathname.includes(InfoRoute.path) ? `${styles.active}` : ""}>
              Info
            </Link>
            <Link
              to={GiftsRoute.path}
              className={location.pathname.includes(GiftsRoute.path) ? `${styles.active}` : ""}
            >
              Gaver
            </Link>
            <Link
              to={AdminRoute.path}
              className={location.pathname.includes(AdminRoute.path) ? `${styles.active}` : ""}
            >
              Admin
            </Link>
          </>
        )}
        <Link to={AuthRoute.path} style={{ float: "right" }} onClick={handleLogout}>
          <IconLogout />
        </Link>
      </div>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};
