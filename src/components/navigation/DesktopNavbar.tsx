import { User } from "firebase/auth";
import { FunctionComponent } from "react";
import { Link, Location } from "react-router-dom";
import { GuestRoute, InfoRoute, GiftsRoute, AdminRoute, SettingsRoute, AuthRoute } from "../../routing/routes";
import { Roles } from "../authentication/Roles";
import { IconLogout } from "../icons/IconLogout";
import { IconSettings } from "../icons/IconSettings";
import { NavLink } from "./NavLink";
import styles from "./Navbar.module.css";
import { useTranslator } from "../../translations/useTranslator";
import { Flexbox } from "../layout/flexbox/Flexbox";

interface DesktopNavbarProps {
  onLogout: () => Promise<void>;
  user: {
    user: User | null;
    authed: boolean;
    role?: string | undefined;
  };
  location: Location;
}

export const DesktopNavbar: FunctionComponent<DesktopNavbarProps> = ({ onLogout, user, location }) => {
  const translator = useTranslator();
  return (
    <div className={styles.navbar}>
      {user.authed && (
        <Flexbox gap={10}>
          <NavLink
            to={GuestRoute.path}
            active={location.pathname.includes(GuestRoute.path)}
            text={translator.guest()}
          />
          <NavLink to={InfoRoute.path} active={location.pathname.includes(InfoRoute.path)} text={translator.info()} />
          <NavLink
            to={GiftsRoute.path}
            active={location.pathname.includes(GiftsRoute.path)}
            text={translator.gifts()}
          />
          {user?.role === Roles.Admin && (
            <NavLink
              to={AdminRoute.path}
              active={location.pathname.includes(AdminRoute.path)}
              text={translator.admin()}
            />
          )}
        </Flexbox>
      )}
      <Flexbox gap={10}>
        <Link
          to={SettingsRoute.path}
          className={location.pathname.includes(SettingsRoute.path) ? `${styles.active}` : ""}
        >
          <IconSettings />
        </Link>
        <Link to={AuthRoute.path} onClick={async () => await onLogout()}>
          <IconLogout />
        </Link>
      </Flexbox>
    </div>
  );
};
