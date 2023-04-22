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
import { IconCopy } from "../icons/IconCopy";
import { Color } from "../../design/color/Color";
import { IconHamburger } from "../icons/IconHamburger";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { NavLink } from "./NavLink";
import { IconGuest } from "../icons/IconGuest";
import { IconGift } from "../icons/IconGift";
import { IconInfo } from "../icons/IconInfo";
import { IconAdmin } from "../icons/IconAdmin";
import { IconSize } from "../icons/iconProps";

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
            <Link
              to={GuestRoute.path}
              className={location.pathname.includes(GuestRoute.path) ? `${styles.active}` : ""}
            >
              {translator.guest()}
            </Link>
            <Link to={InfoRoute.path} className={location.pathname.includes(InfoRoute.path) ? `${styles.active}` : ""}>
              {translator.info()}
            </Link>
            <Link
              to={GiftsRoute.path}
              className={location.pathname.includes(GiftsRoute.path) ? `${styles.active}` : ""}
            >
              {translator.gifts()}
            </Link>
            {user?.role === Roles.Admin && (
              <Link
                to={AdminRoute.path}
                className={location.pathname.includes(AdminRoute.path) ? `${styles.active}` : ""}
              >
                {translator.admin()}
              </Link>
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
      <div className={styles.mobileNavbar}>
        <div
          className={styles.menuIcon}
          role="button"
          onClick={() => setShowMenu(!showMenu)}
          onKeyUp={() => {}}
          tabIndex={0}
        >
          <IconHamburger />
        </div>
      </div>
      {showMenu && (
        <div className={styles.menu}>
          <Flexbox justifyContent="space-between">
            <Flexbox flexDirection="column" width="50%">
              <NavLink
                to={GuestRoute.path}
                active={location.pathname.includes(GuestRoute.path)}
                onClick={() => setShowMenu(false)}
                title={translator.guest()}
                icon={<IconGuest size={IconSize.Medium} />}
              />
              <NavLink
                to={InfoRoute.path}
                active={location.pathname.includes(InfoRoute.path)}
                onClick={() => setShowMenu(false)}
                title={translator.info()}
                icon={<IconInfo size={IconSize.Medium} />}
              />
              <NavLink
                to={GiftsRoute.path}
                active={location.pathname.includes(GiftsRoute.path)}
                onClick={() => setShowMenu(false)}
                title={translator.gifts()}
                icon={<IconGift size={IconSize.Medium} />}
              />
              {user?.role === Roles.Admin && (
                <NavLink
                  to={AdminRoute.path}
                  active={location.pathname.includes(AdminRoute.path)}
                  onClick={() => setShowMenu(false)}
                  title={translator.admin()}
                  icon={<IconAdmin size={IconSize.Medium} />}
                />
              )}
              <NavLink
                to={SettingsRoute.path}
                active={location.pathname.includes(SettingsRoute.path)}
                onClick={() => setShowMenu(false)}
                title={translator.settings()}
                icon={<IconSettings size={IconSize.Medium} />}
              />
              <NavLink
                to={AuthRoute.path}
                onClick={handleLogout}
                title={translator.login()}
                active={false}
                icon={<IconLogout size={IconSize.Medium} />}
              />
            </Flexbox>
            <div onClick={() => setShowMenu(false)} role="button" onKeyUp={() => {}} tabIndex={0}>
              <IconHamburger />
            </div>
          </Flexbox>
        </div>
      )}
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};
