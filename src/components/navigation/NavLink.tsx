import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Navbar.module.css";

interface NavLinkProps {
  to: string;
  active: boolean;
  onClick?: () => void;
  text?: string;
  icon?: ReactNode;
}

export const NavLink: FunctionComponent<NavLinkProps> = ({ to, active, onClick, text, icon }) => {
  return (
    <Link to={to} className={active ? `${styles.active}` : ""} onClick={onClick}>
      <Flexbox gap={10}>
        {icon}
        {text}
      </Flexbox>
    </Link>
  );
};
