import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar: FunctionComponent = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="guest">Guest</Link>
        <Link to="admin">Admin</Link>
      </div>
      <Outlet />
    </>
  );
};
