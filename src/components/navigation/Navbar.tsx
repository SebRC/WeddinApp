import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { IconLogout } from "../icons/IconLogout";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { handleSignOut } from "../../firebase/firebase";
import { PageLayout } from "../pageLayout/PageLayout";

export const Navbar: FunctionComponent = () => {
  const location = useLocation();
  const user = useCurrentUser();
  const navigate = useNavigate();
  console.log("user id", user?.uid);

  const handleLogout = async () => {
    await handleSignOut();
    navigate("/auth");
  };
  return (
    <>
      <div className={styles.navbar}>
        {user && (
          <>
            <Link to="guest" className={location.pathname.includes("guest") ? `${styles.active}` : ""}>
              Guest
            </Link>
            <Link to="info" className={location.pathname.includes("info") ? `${styles.active}` : ""}>
              Info
            </Link>
            <Link to="admin" className={location.pathname.includes("admin") ? `${styles.active}` : ""}>
              Admin
            </Link>
            <Link to="auth" className={location.pathname.includes("auth") ? `${styles.active}` : ""}>
              Auth
            </Link>
          </>
        )}
        <Link to="auth" style={{ float: "right" }} onClick={handleSignOut}>
          <IconLogout />
        </Link>
      </div>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};
