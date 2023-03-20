import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation } from "react-router-dom";
import { LogoutIcon } from "../icons/LogoutIcon";

export const Navbar: FunctionComponent = () => {
  const location = useLocation();
  return (
    <>
      <div className={styles.navbar}>
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
        <Link to="logout" style={{ float: "right" }}>
          <LogoutIcon />{" "}
        </Link>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};
