import { User } from "firebase/auth";
import { FunctionComponent, useState } from "react";
import { Location } from "react-router-dom";
import { GuestRoute, InfoRoute, GiftsRoute, AdminRoute, SettingsRoute, AuthRoute } from "../../routing/routes";
import { useTranslator } from "../../translations/useTranslator";
import { Roles } from "../authentication/Roles";
import { GhostButton } from "../button/GhostButton";
import { IconAdmin } from "../icons/IconAdmin";
import { IconGift } from "../icons/IconGift";
import { IconGuest } from "../icons/IconGuest";
import { IconHamburger } from "../icons/IconHamburger";
import { IconInfo } from "../icons/IconInfo";
import { IconLogout } from "../icons/IconLogout";
import { IconSize } from "../icons/iconProps";
import { IconSettings } from "../icons/IconSettings";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Navbar.module.css";
import { NavLink } from "./NavLink";

interface MobileNavbarProps {
  onLogout: () => Promise<void>;
  user: {
    user: User | null;
    authed: boolean;
    role?: string | undefined;
  };
  location: Location;
}

export const MobileNavbar: FunctionComponent<MobileNavbarProps> = ({ onLogout, user, location }) => {
  const [showMenu, setShowMenu] = useState(false);
  const translator = useTranslator();

  const handleLogout = async () => {
    setShowMenu(false);
    await onLogout();
  };

  return (
    <>
      <div className={styles.mobileNavbar} style={{ boxShadow: showMenu ? "none" : "var(--box-shadow-subtle)" }}>
        <GhostButton onClick={() => setShowMenu(!showMenu)}>
          <IconHamburger />
        </GhostButton>
      </div>
      <div
        className={styles.menu}
        style={{
          top: showMenu ? "0" : "-500px",
          right: showMenu ? "0" : "-500px",
        }}
      >
        <Flexbox justifyContent="space-between" alignItems="flex-start">
          <Flexbox flexDirection="column" width="50%">
            <NavLink
              to={GuestRoute.path}
              active={location.pathname.includes(GuestRoute.path)}
              onClick={() => setShowMenu(false)}
              text={translator.guest()}
              icon={<IconGuest size={IconSize.Medium} />}
            />
            <NavLink
              to={InfoRoute.path}
              active={location.pathname.includes(InfoRoute.path)}
              onClick={() => setShowMenu(false)}
              text={translator.info()}
              icon={<IconInfo size={IconSize.Medium} />}
            />
            <NavLink
              to={GiftsRoute.path}
              active={location.pathname.includes(GiftsRoute.path)}
              onClick={() => setShowMenu(false)}
              text={translator.gifts()}
              icon={<IconGift size={IconSize.Medium} />}
            />
            {user?.role === Roles.Admin && (
              <NavLink
                to={AdminRoute.path}
                active={location.pathname.includes(AdminRoute.path)}
                onClick={() => setShowMenu(false)}
                text={translator.admin()}
                icon={<IconAdmin size={IconSize.Medium} />}
              />
            )}
            <NavLink
              to={SettingsRoute.path}
              active={location.pathname.includes(SettingsRoute.path)}
              onClick={() => setShowMenu(false)}
              text={translator.settings()}
              icon={<IconSettings size={IconSize.Medium} />}
            />
            <NavLink
              to={AuthRoute.path}
              onClick={handleLogout}
              text={translator.logout()}
              active={false}
              icon={<IconLogout size={IconSize.Medium} />}
            />
          </Flexbox>
        </Flexbox>
      </div>
    </>
  );
};
