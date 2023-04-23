import { FunctionComponent, useState } from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { IconLogout } from "../icons/IconLogout";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { handleSignOut } from "../../firebase/firebase";
import { PageLayout } from "../layout/pageLayout/PageLayout";
import { AdminRoute, AuthRoute, GiftsRoute, GuestRoute, InfoRoute, SettingsRoute } from "../../routing/routes";
import { Roles } from "../authentication/Roles";
import { useTranslator } from "../../translations/useTranslator";
import { IconSettings } from "../icons/IconSettings";
import { IconHamburger } from "../icons/IconHamburger";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { NavLink } from "./NavLink";
import { IconGuest } from "../icons/IconGuest";
import { IconGift } from "../icons/IconGift";
import { IconInfo } from "../icons/IconInfo";
import { IconAdmin } from "../icons/IconAdmin";
import { IconSize } from "../icons/iconProps";
import { GhostButton } from "../button/GhostButton";

export const Navbar: FunctionComponent = () => {
  const location = useLocation();
  const user = useCurrentUser();
  const navigate = useNavigate();
  const translator = useTranslator();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = async () => {
    setShowMenu(false);
    await handleSignOut();
    navigate(AuthRoute.path);
  };

  return (
    <>
      <div className={styles.navbar}>
        {user.authed && (
          <div>
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
          </div>
        )}
        <div>
          <Link
            to={SettingsRoute.path}
            className={location.pathname.includes(SettingsRoute.path) ? `${styles.active}` : ""}
          >
            <IconSettings />
          </Link>
          <Link to={AuthRoute.path} onClick={handleLogout}>
            <IconLogout />
          </Link>
        </div>
      </div>
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
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};
