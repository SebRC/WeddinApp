import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Navbar.module.css";

interface NavLinkProps {
  to: string;
  active: boolean;
  onClick: () => void;
  title?: string;
  icon?: ReactNode;
}

export const NavLink: FunctionComponent<NavLinkProps> = ({ to, active, onClick, title, icon }) => {
  return (
    <Link to={to} className={active ? `${styles.active}` : ""} onClick={onClick}>
      <Flexbox gap={10}>
        {icon}
        {title}
      </Flexbox>
    </Link>
  );
};
