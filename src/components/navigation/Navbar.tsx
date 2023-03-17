import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation } from "react-router-dom";

export const Navbar: FunctionComponent = () => {
  const location = useLocation();
  return (
    <>
      <div className={styles.navbar}>
        <Link to="guest" className={location.pathname.includes("guest") ? `${styles.active}` : ""}>
          Guest
        </Link>
        <Link to="admin" className={location.pathname.includes("admin") ? `${styles.active}` : ""}>
          Admin
        </Link>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};
